import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];

  return (
    <div>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end ">
        <img src={albumdata.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumdata.name}
          </h2>
          <h4>{albumdata.desc}</h4>
          <p className="mt-1 flex items-center">
            <img
              src={assets.spotify_logo}
              alt=""
              className="inline-block w-5"
            />
            &nbsp;
            <b>Spotify</b>&nbsp;• 1,323,251 likes &nbsp;• <b>50 songs,&nbsp;</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4 ">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] cursor-pointer hover:bg-[#ffffff2b]">
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} alt="" className="inline w-10 mr-5" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumdata.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px text-center">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
