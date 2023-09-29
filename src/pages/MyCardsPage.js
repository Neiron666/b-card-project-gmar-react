import React, { useEffect, useState } from "react";
import CardList from "../components/cards/CardList";

const MyCardsPage = () => {
  const { showCards } = CardList();

  console.log(showCards);

  let cardsContent = <p>No cards is here</p>;
  if (showCards) {
    cardsContent = showCards;
  }

  return (
    <>
      <h1> MyCards Page </h1>
      <p>Here You can find bussiness cards from all categories</p>
      <hr />

      {cardsContent}
    </>
  );
};

export default MyCardsPage;
