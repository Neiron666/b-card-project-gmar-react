import React from "react";

const CardBody = (props) => {
  return (
    <span className={props.className}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <hr />
      <p>{`Phone: ${props.phone}`}</p>
      <p>{`Address: ${props.address}`}</p>
      <p>{`Card Number: ${props.cardNumber}`}</p>
    </span>
  );
};

export default CardBody;
