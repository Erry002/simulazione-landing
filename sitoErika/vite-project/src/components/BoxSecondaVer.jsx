import React, { useState } from "react";
import marker from "../assets/map-marker.png";
import { FaStar } from "react-icons/fa";

import star1 from "../assets/star/star_1.png";
import star2 from "../assets/star/star_2.png";
import star3 from "../assets/star/star_3.png";
import star4 from "../assets/star/star_4.png";
import star5 from "../assets/star/star_5.png";

function BoxSecondaVer({ nome, voto, commento, position, flag, latoR }) {
  const [showRecensione, setShowRecensione] = useState(flag);

  const toggleMarker = () => {
    setShowRecensione(!showRecensione);
  };

  const { top, right, left } = position;

  console.log(flag);
  return (
    <div
      className=" absolute z-10 w-8 "
      style={{ top, right, left }}
    >
      <img
        src={marker}
        alt="marker"
        onClick={toggleMarker}
        className=" relative cursor-pointer z-10"
      />
      <div
        className={` bg-red-500 rounded-xl pt-2
        ${latoR === 0 ? "right-[180px]" : "right-12"} w-[250px] relative z-0 rounded-xl ${
          showRecensione ? "" : "hidden"
        }`}
      >
        <h1 className=" bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
          {nome}
        </h1>
        <img
          src={voto}
          alt="una star"
          className=" h-28 absolute -top-9 right-1"
        />
        <div className=" pt-2 px-4 pb-2">
          <p className=" text-slate-50 text-[11px]">{commento}</p>
        </div>
      </div>
    </div>
  );
}

export default BoxSecondaVer;
