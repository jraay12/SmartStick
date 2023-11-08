import React from "react";
import Logout from "../assets/Logout.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const DropDownItem = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="flex justify-end items-end">
      <div className="bg-white h-14 w-28 absolute top-16 rounded-md">
        <div className="flex flex-col">
          <button className="font-semibold border-b-2 text-sm pb-2">
            <span>
              <img src={profile} className="absolute w-[20px] h-[20px] m-1" />
            </span>
            Profile
          </button>
          <button className="font-semibold text-sm" onClick={handleLogout}>
            <span>
              <img src={Logout} className="absolute w-[20px] h-[20px] m-1" />
            </span>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownItem;
