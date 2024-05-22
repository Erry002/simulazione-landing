import React from "react";
// import "./CheckBox.css";

const Checkbox = ({ isChecked, onChange, title,label }) => {
  return (
    <div className=" flex justify-center items-center my-2">
      <input
        required
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        title={title}
        className="h-5 w-5 accent-red-400"
      />
      <label className="ml-2">{label} <span className=" text-red-600">*</span></label>
    </div>
  );
};

export default Checkbox;
