"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoComponent = () => {
  const [playing, setPlaying] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleProgress = (progress) => {
    // console.log(progress.playedSeconds);
    const seconds = Math.floor(progress.playedSeconds);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    setPlayedSeconds(formattedSeconds);
    if (progress.playedSeconds >= 30) {
      setShowControls(true);
    }
  };

  const customControls = (
    <div className="mx-auto transform -translate-y-[150px] w-fit h-fit">
      <button onClick={() => setPlaying(!playing)} className="text-white">
        {playing ? (
          <div className="w-[70px] h-[70px]"></div>
        ) : (
          <div className="w-[70px] h-[70px]">
            <Image src={require("../../public/images/play-button.svg")} />
          </div>
        )}
      </button>
    </div>
  );

  const timer = () => (
    <div className="p-1 rounded-lg w-fit absolute right-1 top-5 border border-red-700 text-red-700 bg-white bg-opacity-50">
      {playedSeconds}s
    </div>
  );

  return (
    <div className="relative w-[300px] h-[200px]">
      {playedSeconds < 30 && timer()}
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        playing={playing}
        onProgress={handleProgress}
        controls={showControls}
        width="100%"
        height="100%"
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
      />
      {customControls}
    </div>
  );
};

export default VideoComponent;
