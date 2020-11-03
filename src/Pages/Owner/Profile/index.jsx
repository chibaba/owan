import React, { useState } from 'react';
import OwnerLayout from '../../../Commons/OwnerLayout';
import cookie from 'js-cookie';
import FormInput from '../../../Components/FormInput/Index';
import ProfileImageUpload from '../../../Components/EventImageUploadButton/ProfileImageUpload';
import toaster from 'toasted-notes';
import { postCall, putCall } from '../../../APIs/requests';
import Button from '../../../Commons/Button';
import api from '../../../APIs/endpoints';

const Profile = () => {
  const userData = JSON.parse(cookie.get('udt'));
  console.log(userData);
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (e) => {
    e.persist();

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    if (e.target.files[0].size > 500000) {
      toaster.notify('Image size must not be above 500kb', {
        duration: 5000,
        position: 'top',
      });
      return;
    }

    reader.onloadend = () => {
      setImageData({ file: e.target.files[0], result: reader.result });
    };
  };

  const handleProfileImageSubmit = () => {
    let formData = new FormData();

    formData.append('file', imageData?.file);

    postCall('https://sandbox.api.humbergames.com/files/v1/upload', formData, {
      'Content-Type': 'multipart/form-data',
    })
      .then((response) => {
        putCall(
          api.updateUser(userData?.userId),
          { avatar: response.data.url },
          { 'Content-Type': 'application/json' },
        )
          .then((response) => {
            cookie.set('udt', response.data);
          })
          .catch((error) => {
            toaster.notify(error.message, {
              duration: 5000,
              position: 'bottom',
            });
          });
      })
      .catch((error) => {
        toaster.notify(error.message, { duration: 5000, position: 'bottom' });
      });
  };
  return (
    <OwnerLayout pageTitle="Profile" nav={true}>
      <ProfileImageUpload
        id="image1"
        name="image1"
        onChange={handleImageUpload}
        previewSrc={imageData?.result}
        initialProfile={userData?.profile?.meta?.avatar}
      />
      {imageData ? (
        <Button
          onClick={handleProfileImageSubmit}
          text="Change Profile Image"
          style={{ width: 'max-content', margin: 'auto', padding: '10px' }}
        />
      ) : null}
      <FormInput
        placeholder="Name"
        label="Fullname"
        loading={true}
        value={userData.profile?.name}
      />
      <FormInput
        placeholder="email"
        label="Email Address"
        loading={true}
        value={userData.email}
      />
      <FormInput
        placeholder="phone"
        label="Phone Number"
        loading={true}
        value={userData.phoneNumber}
      />
      <p style={{ fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.6)' }}>
        Joined {new Date(userData.createdAt).toLocaleDateString()}
      </p>
    </OwnerLayout>
  );
};

export default Profile;
