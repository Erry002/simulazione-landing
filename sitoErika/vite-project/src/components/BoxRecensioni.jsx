import React from "react";

function BoxRecensioni({ nome, voto, commento }) {
  return (
    <div className="sm:flex sm:space-x-5 px-3 absolute bg-red-500 w-52 rounded-xl -left-20 z-40 py-3 text-[11px] text-slate-50 leading-3 font-display">
      <div className=" flex justify-between">
      <h2 className=" flex text-[13px] font-semibold mb-2 bg-red-400 rounded-xl py-1 px-2 shadow-xl leading-[15px]">{nome}</h2>
          <p className=" flex gap-1 mt-1">
            {voto}
            {voto}
            {voto}
            {voto}
          </p>
        </div>
        <div>
          <p>{commento}</p>
        </div>
    </div>
  );
}

export default BoxRecensioni;
