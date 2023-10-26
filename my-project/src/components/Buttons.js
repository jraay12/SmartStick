import React from "react";

const Button = (props) => {
  return (
      <button
        type={props.type}
        onClick={props.onClick}
        
        className={`select-none w-[120px] h-full   rounded-xl  ${props.className}`}
      >
        <span className="block absolute">
          <img src={props.image} className="object-contain" />
        </span>
        {props.buttonName}{" "}
      </button>
  );
};

export default Button;
