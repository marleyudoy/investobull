import React from "react";

function Button({ className,children ,onClick, px, py, text = "udoy" }) {
  return (
    <button
      onClick={onClick}
      className={`${className && className} ${px ? px : "px-4"} ${
        py ? py : "py-2"
      }`}
    >
        {children && children}
      <span>{text}</span>
    </button>
  );
}

export default Button;
