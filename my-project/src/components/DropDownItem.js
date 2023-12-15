import React, { useEffect, useState } from "react";
import Logout from "../assets/Logout.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

const DropDownItem = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  const handleProfile = () => {
    setOpen(true)
  }
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="flex justify-end items-end">
      <div className="bg-white h-7 w-28 absolute top-16 rounded-md">
        <div className="flex flex-col">
          {/* <button className="font-semibold border-b-2 text-sm pb-2" onClick={handleProfile}>
            <span>
              <img src={profile} className="absolute w-[20px] h-[20px] m-1" />
            </span>
            Profile
          </button> */}
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
