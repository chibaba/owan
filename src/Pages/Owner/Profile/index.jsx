import React from 'react';
import OwnerLayout from '../../../Commons/OwnerLayout';
import cookie from 'js-cookie';
import FormInput from '../../../Components/FormInput/Index';

const Profile = () => {
  const userData = JSON.parse(cookie.get('udt'));
  console.log(userData);
  return (
    <OwnerLayout pageTitle="Profile" nav={true}>
      <FormInput
        placeholder="Name"
        label="Fullname"
        loading={true}
        value={userData.profile.name}
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
