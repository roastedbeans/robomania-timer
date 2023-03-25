import React from "react";
import Logo from "../assets/LOGOMain.png";
export const Header = () => {
  return (
    <>
      <img
        className="relative content-center z-10 h-[20vh] top-[-2vh] p-0 m-0 w-full object-scale-down drop-shadow-lg"
        src={Logo}></img>
    </>
  );
};
