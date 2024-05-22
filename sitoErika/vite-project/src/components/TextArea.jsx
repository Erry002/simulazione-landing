import React from "react";

const TextArea = ({ value, onChange, placeholder, cols, title, rows }) => (
  <div className=" flex flex-col">
    <h2 className=" mb-3">{title}</h2>
    <textarea
      cols={cols}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-lg bg-red-100 border-4 border-red-900 p-4 w-full text-slate-900 outline-offset-4 outline-red-900"
    ></textarea>
  </div>
);

export default TextArea;



/*  // Il corrispettivo in componente react o html
        <textarea
            cols="30"
            rows="10"
            value={message}
            placeholder="Scrivi un messaggio"
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg bg-red-100 border-4 border-red-900 p-4 w-full text-slate-200"
        ></textarea>
*/