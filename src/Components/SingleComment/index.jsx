import React from 'react';
import Styled from 'styled-components';

function SingleComment({ name, isPinned, comment }) {
  return (
    <SingleCommentWrapper>
      <ProfileImage>
        <img src={comment?.avatar} alt="me" />
      </ProfileImage>
      <CommentDetails>
        <CommentHead>
          <h6>{name}</h6>
          {isPinned ? <HeadNotification>PINNED</HeadNotification> : null}
        </CommentHead>
        <Comment>{comment?.message}</Comment>
      </CommentDetails>
    </SingleCommentWrapper>
  );
}

const SingleCommentWrapper = Styled.div`
  display: flex;
`;

const ProfileImage = Styled.div`
  border-radius: 50%;
  margin-right: 10px;
  flex: 1;
  img {
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
  }
`;

const CommentDetails = Styled.div`
  flex: 16;
`;

const CommentHead = Styled.div`
  display: flex;
  h6 {
    color: #fff;
    font-size: 12px;
    margin: 0;
    margin-right: 10px;
  }
`;

const HeadNotification = Styled.span`
  color: #fff;
  font-size: 12px;
`;

const Comment = Styled.p`
  font-size: 12px;
  color: #fff;
`;

export default SingleComment;
