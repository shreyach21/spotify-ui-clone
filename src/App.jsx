import React, { useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { Outlet, useLocation } from "react-router-dom";
import { albumsData } from "./assets/assets";

const App = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumid = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumid)].bgColor;
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum]);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <div
          className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 "
          ref={displayRef}
        >
          {<Outlet />}
        </div>
      </div>
      <Player />
    </div>
  );
};

export default App;
