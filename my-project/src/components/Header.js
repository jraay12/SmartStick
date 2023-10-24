import React,{useState} from "react";
import Logo from "../assets/smartStickLogoWhite.png";
import sampleProfile from "../assets/sampleProfile.png";
import DropDown from "../assets/DropDown.png";

const Header = () => {
    const [Drop, setDown] = useState(true)

    const handleDropDown = () => {
        setDown(!Drop)
        console.log(Drop)
    }
  return (
    <div className="flex h-16 bg-headerColor">
      <div className="h-full flex  items-center w-screen">
        <img src={Logo} className="h-16" />
      </div>
      <div className="flex justify-end items-center min-w-[300px] gap-2 text-white">
        Louie Ray Senining
        <img src={sampleProfile} className="h-10" />
        <button className="cursor-pointer" onClick={handleDropDown}>
          <img src={DropDown} className={`h-10 ${Drop && "rotate-180"} `} />
        </button>
      </div>
    </div>
  );
};

export default Header;
