import React from "react";
import { assets } from "../assets/assets";
import { GoBell } from "react-icons/go";
import { GrInstallOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            onClick={() => navigate(1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-black bg-white px-4 py-1 rounded-2xl text-[15px] hidden md:block hover:scale-105 cursor-pointer">
            Explore Premium
          </p>
          <p className="text-white bg-black px-3 py-1 rounded-2xl cursor-pointer hover:scale-105 text-[15px] flex items-center gap-1">
            <GrInstallOption size={17} />
            Install App
          </p>
          <div className="hover:scale-105 rounded-full bg-black flex items-center justify-center p-2 cursor-pointer">
            <GoBell className="text-white/65 hover:text-white " size={18} />
          </div>
          <p className="text-black bg-[#1ed760] hover:scale-105 rounded-full w-6 h-6 flex items-center justify-center text-[15px] cursor-pointer">
            S
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="hover:bg-[#262626] bg-[#202020] text-white cursor-pointer px-3 py-1 rounded-2xl">
          Music
        </p>
        <p className="hover:bg-[#262626] bg-[#202020] text-white cursor-pointer px-3 py-1 rounded-2xl">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
