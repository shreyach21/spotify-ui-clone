import React from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img src={songsData[0].image} alt="" className="w-12 rounded" />
        <div>
          <p>{songsData[0].name}</p>
          <p className="text-white/55">{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-6">
          <img
            src={assets.shuffle_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.play_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5 text-[#979797]">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px]  bg-[#4d4d4d] rounded-full ">
            <hr className="h-1 bg-white w-0 hover:bg-green-500 rounded-full border-none cursor-pointer" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex gap-2 items-center opacity-75">
        <img src={assets.plays_icon} alt="" className="w-4" />
        <img src={assets.mic_icon} alt="" className="w-4" />
        <img src={assets.queue_icon} alt="" className="w-4" />
        <img src={assets.speaker_icon} alt="" className="w-4" />
        <img src={assets.volume_icon} alt="" className="w-4" />
        <div className="w-20 bg-[#4d4d4d] rounded-full">
          <hr className="h-1 w-full bg-white cursor-pointer hover:bg-green-500 rounded-full border-none" />
        </div>
        <img src={assets.mini_player_icon} alt="" className="w-4" />
        <img src={assets.zoom_icon} alt="" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
