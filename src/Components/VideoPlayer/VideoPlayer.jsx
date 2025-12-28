import React from 'react';
import './VideoPlayer.css';
import goddyVideo from '../../assets/gODDY.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={() => setPlayState(false)}>
      <video src={goddyVideo} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
