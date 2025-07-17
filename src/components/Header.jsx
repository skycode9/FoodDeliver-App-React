import React, { useState } from "react";
import { LOGO_URL } from "../utils/comman";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);
  const handleChangeBtn = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between p-3 items-center border mt-1">
        <Link to="/">
          <img src={LOGO_URL} alt="" className="w-24 h-24 object-contain" />
        </Link>
        <ul className="flex gap-4 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
