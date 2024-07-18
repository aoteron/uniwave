// import React from 'react'
import { assets, songsData } from "myFrontendAssets";

const Player = () => {
  return (
    <div className="h-[10%] bg-[var(--primary-background)] flex justify-between items-center px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-14 rounded-xl"
          src={songsData[0].image}
          alt="Song data"
        />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle mode"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous song"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.play_icon}
            alt="Play"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next song"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-[var(--neutral-light)] rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-[var(--primary-accent)] rounded-full" />
          </div>
          <p>3:30</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Playlists" />
        <img className="w-4" src={assets.mic_icon} alt="Mic" />
        <img className="w-4" src={assets.queue_icon} alt="Queue" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-4" src={assets.volume_icon} alt="Assets" />
        <div className="w-20 bg-[--neutral-light] h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="Miniplayer" />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
