import React from "react";
import Logo from "../assets/LOGOMain.png";
import CpED from "../assets/CpED.png";
import CpEC from "../assets/CpEC.png";

export const Header = () => {
  return (
    <>
      <div className="header-container flex gap-0 w-[100%] justify-evenly align-middle drop-shadow- xl">
        <img
          className="relative content-center z-10 h-[9rem] top-[-1vh] p-0 m-0 w-full object-scale-down drop-shadow-lg"
          src={CpED}></img>
        <img
          className="relative content-center z-10 h-[10rem] top-[-1vh] p-0 m-0 w-full object-scale-down drop-shadow-lg"
          src={Logo}></img>
        <img
          className="relative content-center z-10 h-[10rem] top-[-1vh] p-0 m-0 w-full object-scale-down drop-shadow-lg"
          src={CpEC}></img>
      </div>
    </>
  );
};
