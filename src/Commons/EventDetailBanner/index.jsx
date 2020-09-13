import React from 'react';
import Styled from 'styled-components';

const EventDetailBanner = ({ imageURL, text }) => {
  return (
    <EventBanner>
      <div className="overlay"></div>
      <p>{text}</p>
      <img src={imageURL} alt="banner" />
    </EventBanner>
  );
};

const EventBanner = Styled.div`
  width: "100%";
  height: 220px;
  overflow: hidden;
  position: relative;
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 99;
  }
  img {
    width: 100%;
  }
  p {
    position: absolute;
    bottom: 0;
    padding: 15px 5%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    width: 100%;
    z-index: 999;
    margin: 0;
    font-size: 12px;
  }
`;

export default EventDetailBanner;
