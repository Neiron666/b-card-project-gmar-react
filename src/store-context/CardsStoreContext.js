import React, { useCallback, useContext, useEffect, useState } from "react";
import UsersStoreContext from "./UsersStoreContext";
import { useLocation } from "react-router-dom";

const CardsStoreContext = React.createContext({
  cards: [{}],
  onAddCard: () => {},
  onDeleteFavCardonDeleteCard: () => {},
  onAddFavCard: () => {},
  onDeleteFavCard: () => {},
  favCards: [{}],
  onDeleteCard: () => {},
  isCardFavorite: () => {},
  onEditCardActive: () => {},
  editPageActive: Boolean,
  editCard: {},
  onEditCard: () => {},
  setAddCadrdButtonIsToched: () => {},
  addCadrdButtonIsToched: Boolean,
});

export const CardsStoreContextProvider = (props) => {
  const location = useLocation();
  const currentLocation = location.pathname.endsWith("/my-cards");

  const uCtx = useContext(UsersStoreContext);
  const [cards, setCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
  const [editPageActive, setEditPageActive] = useState(false);
  const [editCard, setEditCard] = useState([]);
  const [addCadrdButtonIsToched, setAddCadrdButtonIsToched] = useState(false);
  const addCardHandle = async (newCard) => {
    await fetch(
      `https://react-course-http-bce24-default-rtdb.firebaseio.com/cards.json`,
      {
        method: "POST",
        body: JSON.stringify(newCard),
      }
    );
    // setCards((prevCards) => [...prevCards, newCard]);
  };
  console.log(uCtx.users);
  useEffect(() => {
    const storedKey = localStorage.getItem("firebaseKey");
    const fetchCards = async () => {
      // setIsLoading(true);
      const response = await fetch(
        "https://react-course-http-bce24-default-rtdb.firebaseio.com/cards.json"
      );
      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
      const responseData = await response.json();
      // console.log(responseData);
      const loadedCards = [];
      for (const key in responseData) {
        if (responseData[key].userId === storedKey) {
          loadedCards.push({
            id: key,
            userId: responseData[key].userId,
            name: responseData[key].name,
            title: responseData[key].title,
            userId: responseData[key].userId,
            description: responseData[key].description,
            src: responseData[key].src,
            alt: responseData[key].alt,
            phone: responseData[key].phone,
            address: responseData[key].address,
            url: responseData[key].url,
            email: responseData[key].email,
            state: responseData[key].state,
            country: responseData[key].country,
            city: responseData[key].city,
            street: responseData[key].street,
            houseNumber: responseData[key].houseNumber,
            zip: responseData[key].zip,
          });
        }
      }
      return loadedCards;
    };
    fetchCards().then((loadedCards) => {
      // Обновляем состояние users с помощью полученных данных
      setCards(loadedCards);
    });
  }, [currentLocation]);

  const editCardisActiveHandler = (cardId) => {
    const cardToEdit = cards.find((card) => card.id === cardId);
    setEditCard(cardToEdit);
    setEditPageActive(true);
  };

  const submitEditCardHandler = (currentCard) => {
    const updatedCardList = cards.map((card) =>
      card.id === currentCard.id ? currentCard : card
    );
    setCards(updatedCardList);
    setEditPageActive(false);
  };

  console.log(editCard);
  console.log(cards);
  console.log(editPageActive);

  const deleteCardHandle = (cardId) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((card) => card.id !== cardId);
      return updatedCards;
    });
  };
  const favCardDeleteHandler = (cardId) => {
    setFavCards((prevCards) => {
      const updatedCards = [...prevCards.filter((card) => card.id !== cardId)];
      return updatedCards;
    });
  };

  const isCardFavorite = (cardId) => {
    return favCards.find((card) => card.id === cardId);
  };

  const FavCardsHandler = (newCardId) => {
    if (!favCards.find((card) => card.id === newCardId)) {
      const updatedCardList = [
        ...favCards,
        ...cards.filter((card) => card.id === newCardId),
      ];
      setFavCards(updatedCardList);
    } else {
      favCardDeleteHandler(newCardId);
    }
  };

  return (
    <CardsStoreContext.Provider
      value={{
        isCardFavorite: isCardFavorite,
        cards: cards,
        onAddCard: addCardHandle,
        onDeleteCard: deleteCardHandle,
        onAddFavCard: FavCardsHandler,
        favCards: favCards,
        onDeleteFavCard: favCardDeleteHandler,
        onEditCardActive: editCardisActiveHandler,
        editPageActive: editPageActive,
        editCard: editCard,
        onEditCard: submitEditCardHandler,
        setAddCadrdButtonIsToched,
        addCadrdButtonIsToched,
      }}
    >
      {props.children}
    </CardsStoreContext.Provider>
  );
};

export default CardsStoreContext;
