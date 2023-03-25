import React, { useState, useEffect } from "react";
var storeMin = "00";
var storeSec = "00";
var totalSeconds = 1;

export const DisplayTimer = ({ setStartAnimation, setToSec }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  let valueMin, valueSec, valZeroMin, valZeroSec;

  const btnStart = document.getElementById("btnStart");
  const btnPause = document.getElementById("btnPause");
  const btnReset = document.getElementById("btnReset");

  useEffect(() => {
    if (start === true) {
      setStartAnimation(true);
      btnPause.disabled = false;
      btnStart.disabled = true;
      btnReset.disabled = true;
      const interval = setInterval(() => {
        if (seconds > 0) {
          valueSec = seconds - 1;
          if (valueSec >= 10) {
            setSeconds(valueSec);
          } else if (valueSec < 10) {
            setSeconds("0" + valueSec);
          }
        }

        if (seconds === 0 || seconds === "00") {
          if (minutes === 0 || minutes === "00") {
            clearInterval(interval);
            setStartAnimation(false);
            setToSec(0);
            setStart(false);
          } else {
            valueMin = minutes - 1;
            if (valueMin >= 10) {
              setMinutes(valueMin);
            } else if (valueMin < 10) {
              setMinutes("0" + valueMin);
            }
            setSeconds(59);
          }
        }
        totalSeconds = minutes * 60 + (seconds - 1);
        setToSec(totalSeconds);
      }, 1000);
      return () => [clearInterval(interval)];
    }

    if (start === false && minutes == "" && seconds == "") {
      setStartAnimation(false);
      if (minutes === 0 || minutes === null || minutes === "0") {
        valZeroMin = "";

        if (btnStart) {
        }
        setMinutes(valZeroMin);
      }
      if (seconds === 0 || seconds === null || seconds === "0") {
        valZeroSec = "";
        if (btnStart) {
        }
        setSeconds(valZeroSec);
      }
    }
  });

  function forMinutes(e) {
    const num = e.target.value;
    valueMin = num.toString().slice(1, 3);
    valueMin = zeroPad(valueMin, 2);
    storeMin = valueMin;

    setMinutes(valueMin);
  }
  function forSeconds(e) {
    const num = e.target.value;
    valueSec = num.toString().slice(1, 3);
    valueSec = zeroPad(valueSec, 2);
    storeSec = valueSec;

    if (valueSec > 59) {
      valueSec = zeroPad(0, 2);
    }
    setSeconds(valueSec);
  }

  return (
    <>
      <div
        style={{ color: totalSeconds == 0 ? "#E71D36" : "white" }}
        className="select-none cursor-pointer pt-2 flex w-[70rem]  h-[21rem] m-0 p-0 justify-between">
        <input
          type="number"
          min="0"
          max="99"
          maxLength="2"
          placeholder="00"
          id="minInput"
          name="minutes"
          value={minutes}
          onChange={(e) => forMinutes(e)}
          className="m-0 pb-[0rem] align-center w-full h-[19rem] box-border text-center display-field drop-shadow-md bg-transparent border-transparent outline-none translate-y-[0rem]"
          disabled={start ? true : false}
        />
        <div className="w-[16rem] h-[10rem] bottom text-center relative">
          <h1 className="select-none center text-[22rem] top-[-7rem] absolute text-center">
            :
          </h1>
        </div>
        <input
          type="number"
          min="0"
          max="59"
          maxLength="2"
          placeholder="00"
          id="secInput"
          name="seconds"
          value={seconds}
          onChange={(e) => forSeconds(e)}
          className="m-0 pb-[0rem] align-center w-full h-[19rem] box-border text-center display-field drop-shadow-md bg-transparent border-transparent outline-none translate-y-[0rem]"
          disabled={start ? true : false}
        />
      </div>
      <div className="space-x-[10%] space-y-0 translate-y-[-.5rem] drop-shadow-lg relative">
        <button
          id="btnStart"
          onClick={() => [
            setMinutes(parseInt(minutes)),
            setSeconds(parseInt(seconds)),
            setStart(true),
          ]}
          disabled={minutes !== "" && seconds !== "" && !start ? false : true}>
          START
        </button>
        <button
          id="btnPause"
          onClick={() => [
            setMinutes(parseInt(minutes)),
            setSeconds(parseInt(seconds)),
            setStartAnimation(false),
            setStart(false),
          ]}
          disabled={minutes !== "" && seconds !== "" && start ? false : true}>
          PAUSE
        </button>

        <button
          id="btnReset"
          onClick={() => [
            setMinutes(storeMin),
            setSeconds(storeSec),
            setStart(false),
          ]}
          disabled={minutes !== "" && seconds !== "" && !start ? false : true}>
          RESET
        </button>
      </div>
    </>
  );
};

const zeroPad = (num, places) => String(num).padStart(places, "0");
