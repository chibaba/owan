import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Colors';
import CommentInput from '../../../Components/CommentInput';
import SingleComment from '../../../Components/SingleComment';
import { useVideoCallContext } from '../../../Context/VideoCallContext';
import { useAppContext } from '../../../Context/AppContext';

function EventComments() {
  const { handleTablesState } = useVideoCallContext();
  const { handleDrawerState } = useAppContext();

  return (
    <CommentWrapper>
      <CommentsArea>
        <UserComment>
          <CommentList>
            <SingleComment
              image="/assets/images/me.jpeg"
              name="Leke Ayodele"
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet."
            />
            <SingleComment
              image="/assets/images/me.jpeg"
              name="Mike ade"
              isPinned={true}
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet."
            />
          </CommentList>
          <CommentInput height="38px" />
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
`;

export default EventComments;
