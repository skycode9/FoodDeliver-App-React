import React from "react";
import { LOGO_URL } from "../utils/comman";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-3 items-center border mt-1">
        <img src={LOGO_URL} alt="" className="w-24 h-24 object-contain" />
        <ul className="flex gap-4 text-lg">
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
