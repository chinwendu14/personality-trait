import React from "react";
import "./button.scss";
const Button = ({ text, large, onClick, className, disabled }) => {
  return (
    <div className={` ${large ? "large" : "btnDivContainer"}`}>
      <button onClick={onClick} disabled={disabled} className={className}>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
