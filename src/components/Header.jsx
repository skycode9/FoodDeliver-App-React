import React, { useState } from "react";
import { LOGO_URL } from "../utils/comman";

const Header = () => {
  const [show, setShow] = useState(true);
  const handleChangeBtn = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between p-3 items-center border mt-1">
        <img src={LOGO_URL} alt="" className="w-24 h-24 object-contain" />
        <ul className="flex gap-4 text-lg">
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
          <li>
            <button
              className="px-3 py-2 bg-teal-600 text-white text-sm rounded cursor-pointer"
              onClick={handleChangeBtn}
            >
              {show ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
