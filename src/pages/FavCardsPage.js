import React, { useContext, useState } from "react";
import CardsStoreContext from "../store-context/CardsStoreContext";
import CardList from "../components/cards/CardList";
import Card from "../components/UI/bussines-card/Card";

const FavCardsPage = () => {
  const ctx = useContext(CardsStoreContext);

  let filteredFavCards = [];

  filteredFavCards =
    ctx.favCards.length > 0 ? (
      <ul>
        {ctx.favCards.map((card) => (
          <Card
            title={card.title}
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            src={card.src}
            alt={card.alt}
            phone={card.phone}
            cardNumber={card.id}
            address={`${card.country} ${card.city} ${card.street} ${card.houseNumber}`}
            url={card.url}
          />
        ))}
      </ul>
    ) : null;

  let cardsContent = <p>No cards is here</p>;

  if (filteredFavCards) {
    cardsContent = filteredFavCards;
  }
  console.log(ctx.favCards);
  console.log(ctx.cards);
  return (
    <>
      <h1> FavCards Page </h1>
      <p>Here You can find your favorite bussiness Cards.</p>
      <hr />
      {cardsContent}
    </>
  );
};

export default FavCardsPage;
