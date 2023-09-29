import React from "react";
import UserLoggedIcon from "../../../header/assets/images/UserLoggedIcon.png";
import { Scale } from "@mui/icons-material";
const UserLogged = (props) => {
  return (
    <img
      onClick={props.onClick}
      src={UserLoggedIcon}
      alt="User Icon"
      style={{
        maxWidth: "3em",
        maxHeight: "80%",
        border: "1px solid #ccc",
        backgroundColor: "lightcyan",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    />
  );
};

export default UserLogged;
