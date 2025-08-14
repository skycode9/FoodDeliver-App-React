import React from "react";

const ToggleBtn = ({ isOn, lable, onToggle, onColor }) => {
  return (
    <div className="flex gap-1">
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
          isOn ? onColor : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
      <span>{lable}</span>
    </div>
  );
};

export default ToggleBtn;
