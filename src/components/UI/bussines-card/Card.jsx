import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import CardHeader from "./CardHeader";
import CardAction from "./CardAction";
import CardBody from "./CardBody";

const Card = (props) => {
  const openExternalLink = (event) => {
    event.preventDefault(); // Предотвращение действия по умолчанию (например, переход по ссылке)
    window.open(props.src, "_blank", "noopener,noreferrer");
  };

  return (
    <li>
      <div className={styles.card}>
        <CardHeader className={styles["card-header"]}>
          <img
            title={`go to ${props.src}`}
            src={props.src}
            alt={props.alt}
            onClick={openExternalLink}
          />
        </CardHeader>
        <CardBody
          title={props.title}
          name={props.name}
          description={props.description}
          phone={props.phone}
          cardNumber={props.cardNumber}
          address={props.address}
          className={styles["card-body"]}
        />
        <CardAction id={props.id} className={styles["card-action"]} />
      </div>
    </li>
  );
};

export default Card;
