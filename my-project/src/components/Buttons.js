import React from "react";

const Button = (props) => {
  return (
    <div className="flex">
      
      <img src={props.image} />
      <button
        type={props.type}
        onClick={props.onClick}
        className={`select-none w-full h-full rounded-xl border-[1px] border-black ${props.className}`}
      >

        {props.buttonName}{" "}
      </button>
    </div>
  );
};

export default Button;
