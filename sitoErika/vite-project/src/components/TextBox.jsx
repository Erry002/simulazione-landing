import React from "react";

const TextBox = ({ value, onChange, placeholder, title, stile }) => (
  <div className=" w-full">
    <h2 className=" ml-2 mb-2 text-slate-500">{title} <span className=" text-red-600">*</span></h2>
    <input
      //Da sistemare la parte di required per il TextBox 
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-3xl bg-red-100 border-2 border-red-300 w-full h-[40px] pl-4 text-slate-900 outline-none mb-2"
    />
  </div>
);

export default TextBox;


/* 
    // Il corrispettivo in react o html
    <input
        type="text"
        placeholder="Inserisci il tuo nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-full text-slate-100"
    />
*/