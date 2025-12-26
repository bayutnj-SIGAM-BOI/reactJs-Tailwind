import React from "react";
import { NavLink } from "react-router-dom";

const button = ({ className, to, title }) => {
  return (
    <>
      <NavLink to={to} className={`p-4 ? ${className} bg-blue-500 ? ${className}`}>
        {title}
      </NavLink>
    </>
  );
};

export default button;
