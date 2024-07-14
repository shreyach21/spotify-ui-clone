import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl ">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
