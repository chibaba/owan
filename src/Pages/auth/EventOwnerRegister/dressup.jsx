import React, { useState } from 'react';
import Styled from 'styled-components';
import ProfileImageUpload from '../../../Components/EventImageUploadButton/ProfileImageUpload';
import toaster from 'toasted-notes';
import { postCall, putCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import cookie from 'js-cookie';
import Button from '../../../Commons/Button';
import {useHistory} from 'react-router-dom'

const DressUp = () => {
  const userData = JSON.parse(cookie.get('udt'));
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false)
  const history = useHistory();

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
    setLoading(true);
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
            setLoading(false);
            toaster.notify('Profile image set', {position: "top", duration: 3000})
            setTimeout(() => {
              history.push('/loadup');
            }, 2000)
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
    <>
      <Header>Dress Up</Header>
      <Banner bg="/assets/wedding-selfie.jpg" />
      <Content>
        <p>
          You must represent even when you're not there physically. Oya, wear
          the colors of the day and take a nice picture.
        </p>
        <ProfileImageUpload
          id="avatar"
          name="avatar"
          onChange={handleImageUpload}
          previewSrc={imageData?.result}
          initialProfile={userData?.profile?.meta?.avatar}
        />
        {imageData ? (
          <Button
            onClick={handleProfileImageSubmit}
            text="Change Profile Image"
            style={{ padding: '10px' }}
            loading={loading}
          />
        ) : null}
      </Content>
    </>
  );
};

export const Header = Styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Banner = Styled.section`
  width: 100%;
  height: 250px;
  background: ${(props) => `url(${props.bg})`} no-repeat center;
  background-size: cover;
`;

export const Content = Styled.section`
  padding: 20px;
  p {
    font-size: 1.3rem;
  }
`;

export default DressUp;
