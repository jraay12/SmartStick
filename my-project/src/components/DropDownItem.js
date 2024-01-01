import React, { useEffect, useState } from "react";
import Logout from "../assets/Logout.png";
import profile from "../assets/profile.png";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "./Profile";

const DropDownItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isSpecificRoute = location.pathname === "/User";

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleMaps = () => {
    navigate("/Map");
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="flex justify-end items-end">
      <div
        className={`bg-white w-28 absolute top-16 rounded-md ${
          isSpecificRoute ? "h-16" : "h-7"
        }`}
      >
        <div className="flex flex-col">
          {isSpecificRoute && (
            <button
              className="font-semibold border-b-2 text-sm pb-2"
              onClick={handleMaps}
            >
              <span>
                <img src={profile} className="absolute w-[20px] h-[20px] m-1" />
              </span>
              Maps
            </button>
          )}
          <button className="font-semibold text-sm" onClick={handleLogout}>
            <span>
              <img src={Logout} className="absolute w-[20px] h-[20px] m-1" />
            </span>
            Sign Out
          </button>
        </div>
      </div>
      {open && <Profile />}
    </div>
  );
};

export default DropDownItem;
