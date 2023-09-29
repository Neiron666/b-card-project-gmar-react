import React from "react";
import { NavLink, useMatch } from "react-router-dom";

//useMatch - Проверяет на совпадение, линков в данном случае

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <NavLink to={to} className={match ? props.className : ""}>
      {children}
    </NavLink>
  );
};

export default CustomLink;
