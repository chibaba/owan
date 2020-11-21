import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Colors from '../../Colors';
import { useVideoCallContext } from '../../../Context/VideoCallContext';
import { useAppContext } from '../../../Context/AppContext';
import SingleComment from '../../../Components/SingleComment';
import CommentInput from '../../../Components/CommentInput';
import socket from '../../../socket';
import cookie from 'js-cookie';

function EventComments() {
  const { handleTablesState } = useVideoCallContext();
  const { handleDrawerState } = useAppContext();
  const [messageData, setMessageData] = useState({
    to: '',
    recipientType: 'group',
    content: '',
    messageType: 'TEXT',
  });
  const [messageSent, setMessageSent] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState(null);
  const [messageContent, setMessageContent] = useState('');

  useEffect(() => {
    let event = JSON.parse(window.localStorage.getItem('event'));
    setMessageData((prevState) => ({ ...prevState, to: event?.group_id }));

    initializeConnection();
  }, []);

  const initializeConnection = () => {
    const udt = JSON.parse(cookie.get('udt'));

    setUserData(udt);

    socket.on('connect', function (socket) {
      console.log('Connected');
    });

    socket.on('broadcast:connected', () => {
      socket.emit('initialization', {
        'client-id': process.env.REACT_APP_CLIENT_ID,
        userId: udt?.userId,
      });
    });
    socket.on('broadcast:message:receive', (payload) => {
      if(payload.messageType === "TEXT") {
        setMessages((prevState) => [...prevState, payload]);
      }
    });
  };
  const handleCommentChange = (e) => {
    setMessageContent(e.target.value)
    setMessageData({ ...messageData, content: JSON.stringify({avatar: userData?.profile?.meta?.avatar, message: e.target.value}) });
  };

  const handleCommentSubmit = () => {
    if (socket.connected) {
      setMessageSent(!messageSent);
      socket.emit('message:send', messageData);
    }
    setMessageData({ ...messageData, content: '' });
    setMessageContent('');
  };

  const renderMessages = () => {
    return messages.map((message, index) => {
      return (
        <SingleComment
          name={message?.sender?.name}
          comment={JSON.parse(message?.content)}
          key={index}
        />
      );
    });
  };

  return (
    <CommentWrapper>
      <CommentsArea>
        <UserComment>
          <CommentList>{renderMessages()}</CommentList>
          <CommentInput
            height="38px"
            onChange={handleCommentChange}
            onClick={handleCommentSubmit}
            value={messageContent}
          />
        </UserComment>
        <Denomination
          onClick={() => {
            handleTablesState(true);
            handleDrawerState();
          }}
        >
          <img src="/assets/images/denomination.png" alt="D" />
        </Denomination>
      </CommentsArea>
    </CommentWrapper>
  );
}

const CommentWrapper = Styled.div`
  width: 100%;
  position: absolute;
  bottom: 30px;
  height: 250px;
`;

const CommentsArea = Styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
`;

const UserComment = Styled.div`
  align-self: flex-end;
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Denomination = Styled.div`
  position: relative;
  width: 37px;
  height: 37px;
  background: ${Colors.defaultGreen};
background: linear-gradient(90deg, ${Colors.defaultGreen} 0%, rgba(0,0,0,1) 95%);
  border-radius: 50%;
  align-self: flex-end;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    border-radius: 50%;
  }
`;

const CommentList = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-end;
  margin-bottom: 10px;
  overflow-y: scroll;
  max-height: 300px;
`;

export default EventComments;
