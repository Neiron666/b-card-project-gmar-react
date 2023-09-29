import React, { useContext } from "react";
import Card from "../UI/bussines-card/Card";
import CardsStoreContext from "../../store-context/CardsStoreContext";

export const DUMMY_CARDS = [
  {
    id: "m1",
    name: "OKC SMILES",
    description: "Dr. Mark Phan & Dr. Kevin Murray",
    src: "https://www.okcsmiles.com/wp-content/uploads/2021/12/smile.jpeg",
    alt: "Cat",
    phone: "405-953-8983",
    address: "Oklahoma City, OK 73170",
    url: "https://www.okcsmiles.com/",
    email: "",
    state: "",
    country: "USA",
    city: "Oklahoma",
    street: "OK",
    houseNumber: "73170",
    zip: "",
  },
  {
    id: "m2",
    name: "First Cart",
    description: "This is the first cart",
    src: "https://i.pinimg.com/originals/bc/47/92/bc4792720c2515308c5fa1645a40478f.jpg",
    alt: "Cat",
    phone: "050-555-666",
    address: "Tel Aviv st1",
    url: "https://i.pinimg.com/originals/bc/47/92/bc4792720c2515308c5fa1645a40478f.jpg",
    email: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  },
  {
    id: "m3",
    name: "First Cart",
    description: "This is the first cart",
    src: "https://i.pinimg.com/originals/bc/47/92/bc4792720c2515308c5fa1645a40478f.jpg",
    alt: "Cat",
    phone: "050-555-666",

    url: "https://i.pinimg.com/originals/bc/47/92/bc4792720c2515308c5fa1645a40478f.jpg",
    email: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  },
];

const CardList = () => {
  const ctx = useContext(CardsStoreContext);
  let showCards =
    ctx.cards.length > 0 ? (
      <ul>
        {ctx.cards.map((card) => (
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

  return {
    showCards,
  };
};

export default CardList;
