import { useState } from "react";

const VegNonVegToggle = () => {
  const [isVegOn, setIsVegOn] = useState(false);
  const [isNonVegOn, setIsNonVegOn] = useState(false);

  const handleVegToggle = () => {
    setIsVegOn((prev) => !prev);
  };
  const handleNonVegToggle = () => {
    setIsNonVegOn((prev) => !prev);
  };

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <button
          onClick={handleVegToggle}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
            isVegOn ? "bg-green-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              isVegOn ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span>Veg</span>
      </div>

      <div className="flex gap-1">
        <button
          onClick={handleNonVegToggle}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
            isNonVegOn ? "bg-red-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              isNonVegOn ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span>Non-Veg</span>
      </div>
    </div>
  );
};

export default VegNonVegToggle;
