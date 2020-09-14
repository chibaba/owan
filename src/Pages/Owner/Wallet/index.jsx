import React from 'react';
import OwnerLayout from '../../../Commons/OwnerLayout';
import WalletBalance from '../../wallet/WalletBalance';

const Wallet = () => {
  return (
    <OwnerLayout pageTitle="Wallet Balance">
      <WalletBalance isOwner={true} />
    </OwnerLayout>
  );
};

export default Wallet;
