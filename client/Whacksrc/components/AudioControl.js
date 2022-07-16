import React, { useEffect, useRef, useState } from "react";
import sound from "../img/sound.svg";
import sound_off from "../img/sound-off.svg";

function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);

  const musicRef = useRef(null);

  useEffect(() => {
    let music = musicRef.current;
    if (isPlaying) {
      music.play();
    } else {
      music.pause();
      music.currentTime = 0;
    }
  }, [isPlaying]);

  const playMusic = () => {
    setIsPlaying((playing) => !playing);
  };

  return (
    <>
      <audio ref={musicRef} src="./sfx/background-music.mp3"></audio>
      <div className="music-btn">
        <img
          alt=""
          src={isPlaying ? sound : sound_off}
          onClick={playMusic}/>
      </div>
    </>
  );
}

export default AudioControl;