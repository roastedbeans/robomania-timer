import React, { useState } from "react";
import { DisplayTimer } from "../components/DisplayTimer";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [toSec, setToSec] = useState("");

  function PlaySound(soundObj) {
    var sound = document.getElementById(soundObj);
    sound.play();
  }

  var className = startAnimation ? "card-container-animation" : "";

  if (toSec === 0) {
    PlaySound("sound1");
    var animColor = "conic-gradient(#E71D36 340deg, #E71D36 345deg)";
  } else {
    if (toSec >= 10) PlaySound("sound3");
    if (toSec < 10 && toSec >= 1) PlaySound("sound2");
    var animColor =
      toSec < 10 && toSec >= 1
        ? "conic-gradient(transparent 340deg, #E71D36 345deg)"
        : "conic-gradient(transparent 340deg, #1460ed 345deg)";
  }
  console.log(toSec);
  return (
    <>
      <div className="card-container item-center top-[-16px]">
        <div
          style={{
            backgroundImage: animColor,
          }}
          className={className}></div>
        <div className="card-container-front">
          <div className="card items-center">
            <DisplayTimer
              setStartAnimation={setStartAnimation}
              setToSec={setToSec}
            />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
