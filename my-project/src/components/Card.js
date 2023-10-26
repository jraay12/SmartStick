import React from "react";

const Card = (props) => {
  return (
    <div className={`flex flex-col w-[290px] h-[147px] bg-cardColor rounded-xl bg-gradient-to-r from-black to-blue-500`}>
      <p className="m-2 text-white font-thin">{props.label}</p>
      <div className="flex justify-center items-center">
        <p
          className={` text-white text-2xl  ${props.className}`}
        >
          {props.number}
        </p>
      </div>

      <img src={props.image} className="h-[60px] w-[60px] absolute mt-20" />
    </div>
  );
};

export default Card;
