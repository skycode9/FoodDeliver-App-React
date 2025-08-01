import React, { useState } from "react";
import { LOGO_URL } from "../utils/comman";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FcOk, FcCancel } from "react-icons/fc";

const Header = () => {
  const [show, setShow] = useState(true);
  const onlineStatus = useOnlineStatus();
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
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                onlineStatus
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              <div className="flex items-center gap-1">
                {onlineStatus ? (
                  <FcOk className="text-lg" />
                ) : (
                  <FcCancel className="text-lg" />
                )}
                <span className="font-semibold">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </div>
            </div>
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
