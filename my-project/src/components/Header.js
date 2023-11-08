import React, { useState, useContext } from "react";
import Logo from "../assets/smartStickLogoWhite.png";
import sampleProfile from "../assets/sampleProfile.png";
import DropDown from "../assets/DropDown.png";
import DropDownItem from "../components/DropDownItem";
import AuthContext from "../auth/Context";

const Header = () => {
  const [Drop, setDown] = useState(true);

  const {auth} = useContext(AuthContext)
  const handleDropDown = () => {
    setDown(!Drop);
  };
  return (
    <div className="flex h-16 bg-headerColor max-w-full">
      <div className="h-full flex  items-center w-screen">
        <img src={Logo} className="h-16" />
      </div>
      <div className="flex justify-end items-center min-w-[300px] gap-2 text-white">
        {auth?.name}
        <img src={sampleProfile} className="h-10" />
        <button className="cursor-pointer" onClick={handleDropDown}>
          <img src={DropDown} className={`h-10 ${Drop && "rotate-180"} `} />
        </button>
      </div>
      {Drop ? "" : <DropDownItem />}
    </div>
  );
};

export default Header;
