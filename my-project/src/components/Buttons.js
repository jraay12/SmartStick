import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`gap-4 elect-none w-[120px] h-full rounded-xl  ${props.className}`}
    >
      <div>
        <span className="">
          <img src={props.image} className="object-contain" />
        </span>
      </div>
      {props.buttonName}{" "}
    </button>
  );
};

export default Button;
