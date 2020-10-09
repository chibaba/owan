import React, { useState } from 'react';
import Styled from 'styled-components';
import Colors from '../../Commons/Colors';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import CopyToClipboard from 'react-copy-to-clipboard';
import Drawer from '../../Commons/Drawer';
import { useAppContext } from '../../Context/AppContext';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

const FormAlert = ({ type, message, closeModal, link }) => {
  const [copied, setShowCopied] = useState(false);
  const { showDrawer, handleDrawerState } = useAppContext();
  if (type === 'success') {
    return (
      <>
        {showDrawer ? (
          <Drawer drawerPosition="bottom">
            <p style={{ textAlign: 'center' }}>Share event link</p>
            <ButtonsArea>
              <WhatsappShareButton
                url={link}
                title={'Inviting you to attend my wedding on link up'}
              >
                <WhatsappIcon size={35}></WhatsappIcon>
              </WhatsappShareButton>
            </ButtonsArea>
          </Drawer>
        ) : null}
        <AlertOverlay>
          <CloseButton onClick={closeModal}>
            <Icon path={mdiClose} size={1} color={Colors.white} />
          </CloseButton>
          <AlertSuccess>
            <img src="/assets/images/icons/check.svg" alt="check" />
            {copied ? (
              <p style={{ color: '#fff', fontSize: '12px' }}>
                Link copied to clipboard!.
              </p>
            ) : null}
            <AlertMessage>{message}</AlertMessage>
            {link ? <AlertLink>{link}</AlertLink> : null}
            <AlertButtonArea>
              <CopyToClipboard
                text={link}
                onCopy={() => {
                  setShowCopied(true);
                }}
              >
                <AlertButtonOutline>Copy</AlertButtonOutline>
              </CopyToClipboard>
              <AlertButton onClick={handleDrawerState}>Share</AlertButton>
            </AlertButtonArea>
          </AlertSuccess>
        </AlertOverlay>
      </>
    );
  }
  return <AlertOverlay></AlertOverlay>;
};

const ButtonsArea = Styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  button {
    outline: none;
  }
  svg {
    border-radius: 50%;
  }
`;

const AlertOverlay = Styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 480px;
  }
`;

const CloseButton = Styled.button`
  width: 40px;
  height: 40px;
  background: ${Colors.dangerRed};
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
  border: none;
`;

const AlertSuccess = Styled.div`
  width: 80%;
  background: ${Colors.alertSuccessGreen};
  padding: 40px 10px;
  border-radius: 5px;
  box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlertMessage = Styled.p`
  width: 50%;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

const AlertLink = Styled.p`
  width: 90%;
  background: ${Colors.alertSuccessDarkGreen};
  border-radius: 5px;
  text-align: center;
  padding: 15px 7px;
  color: ${Colors.white};
  font-weight: bold;
  font-size: 14px;
  white-space: pre-wrap;
  text-align: left;
  word-wrap: break-word;
`;

const AlertButtonArea = Styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px 0;
`;

const AlertButton = Styled.button`
  border: none;
  background: #fff;
  padding: 10px 20px;
  width: 47%;
  border-radius: 5px;
  color: ${Colors.defaultGreen};
  font-weight: bold;
  font-size: 14px;
  outline: none;
`;

const AlertButtonOutline = Styled.button`
  border: 2px solid ${Colors.white};
  background: none;
  padding: 10px 20px;
  width: 47%;  
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  outline: none;
`;

export default FormAlert;
