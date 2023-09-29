import React from "react";

const CardHeader = (props) => {
  return <span className={props.className}>{props.children}</span>;
};

export default CardHeader;
