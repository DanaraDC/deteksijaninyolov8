// src/components/ui/Button.jsx
import React from "react";

export const Button = ({ variant, children }) => {
  const baseStyle =
    "px-3 py-1 rounded-md text-base font-medium transition duration-300";
  const outlineStyle =
    "border border-gray-300 text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white";
  const solidStyle = "bg-black text-white shadow hover:bg-gray-900";

  return (
    <button
      className={`${baseStyle} ${
        variant === "outline" ? outlineStyle : solidStyle
      }`}>
      {children}
    </button>
  );
};
