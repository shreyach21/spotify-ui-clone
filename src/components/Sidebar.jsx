import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { GoPlus, GoHomeFill } from "react-icons/go";
import { FiSearch, FiGlobe } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-full w-[25%] p-2 lg:flex flex-col gap-2 text-white hidden ">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
        <div className="flex items-center gap-5 cursor-pointer pl-6 text-white/65 hover:text-white duration-300 ">
          {/* <img src={assets.home_icon} className="w-6 " alt="home" /> */}
          <GoHomeFill size={25} />
          <p className="font-semibold text-[15.5px]">Home</p>
        </div>
        <div className="flex items-center gap-5 cursor-pointer pl-6 text-white/65 hover:text-white duration-300">
          {/* <img src={assets.search_icon} className="w-6 " alt="search" /> */}
          <FiSearch size={25} />
          <p className="font-semibold text-[15.5px]">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] rounded h-[85%]">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex gap-3 items-center pl-2">
            <img src={assets.stack_icon} className="w-6 " alt="library" />
            <span className="text-[15.5px] text-white/65 font-semibold hover:text-white duration-300 cursor-pointer ">
              Your Library
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <GoPlus
              size={32}
              className="text-white/55 p-1 hover:text-white duration-300 cursor-pointer hover:bg-[#1a1a1a] rounded-full"
            />
            <FaArrowRight
              size={28}
              className="text-white/55 p-1 hover:text-white duration-300 cursor-pointer hover:bg-[#1a1a1a] rounded-full"
            />
          </div>
        </div>

        <div className="overflow-y-scroll max-h-[400px] min-h-[67px] ">
          <div className="py-3.5 bg-[#242424] rounded flex flex-col font-semibold justify-start items-start pl-5 gap-1.5 m-2">
            <p className="text-[15px] font-medium tracking-wide leading-7">
              Create your first playlist
            </p>
            <p className="font-light text-[13px] leading-4 tracking-wide">
              it's easy, we'll help you
            </p>
            <button className="px-4 py-1.5 bg-white text-black  rounded-full text-[13.5px] mt-4 hover:scale-105 hover:bg-gray-100">
              Create playlist
            </button>
          </div>
          <div className="py-3.5 bg-[#242424] rounded flex flex-col font-semibold justify-start items-start pl-5 gap-1.5 m-2 mt-6">
            <p className="text-[15px] font-medium tracking-wide leading-7">
              Let's find some podcasts to follow
            </p>
            <p className="font-light text-[13px] leading-4 tracking-wide">
              We'll keep you updated on new episodes
            </p>
            <button className="px-4 py-1.5 bg-white text-black rounded-full text-[13.5px] mt-4 hover:scale-105 hover:bg-gray-100">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
