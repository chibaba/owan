import React, { useEffect } from 'react';
import Styled from 'styled-components';
import VideoCallLayout from '../../../Commons/VideoCallLayout';
import Drawer from '../../../Commons/Drawer';
import { useAppContext } from '../../../Context/AppContext';
import { useVideoCallContext } from '../../../Context/VideoCallContext';
import { useLocation } from 'react-router-dom';
import eyeson from 'eyeson';

function Video() {
  const { showDrawer } = useAppContext();
  const { showTables, showSideDrawer } = useVideoCallContext();
  const { state } = useLocation();

  useEffect(() => {
    window.localStorage.setItem('vak', state.accessKey);
    let accessKey = state.accessKey || window.localStorage.getItem('vak');
    eyeson.onEvent((event) => {
      if (event.type !== 'accept') {
        return;
      }
      // Note: Some iOS devices might require video to have autoplay attribute set.
      let video = document.querySelector('video');
      video.srcObject = event.remoteStream;
      video.play();
    });
    eyeson.start(accessKey);
  }, [state]);

  return (
    <VideoCallLayout>
      {showDrawer && showSideDrawer ? (
        <Drawer drawerPosition="right"></Drawer>
      ) : null}
      {showDrawer && showTables ? (
        <Drawer drawerPosition="bottom"></Drawer>
      ) : null}
      <VideoLayer>
        <VideoPlayer className="video"></VideoPlayer>
      </VideoLayer>
    </VideoCallLayout>
  );
}

const VideoLayer = Styled.div`
  height: 100vh;
  width: 100%;
`;

const VideoPlayer = Styled.video`
  background: url('/assets/images/wedding-demo.jpg') no-repeat;
  box-shadow: inset 0px 0px 14px 50px rgba(0,0,0,0.3);
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  object-fit: cover;
`;

export default Video;
