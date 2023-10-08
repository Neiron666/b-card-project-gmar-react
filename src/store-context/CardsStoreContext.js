import React, { useCallback, useContext, useEffect, useState } from "react";
import UsersStoreContext from "./UsersStoreContext";
import { useLocation } from "react-router-dom";
import {
  firebase,
  database as firebaseDatabase,
} from "../firebase/FirebaseConfig";
import {
  getDatabase,
  ref,
  remove,
  set,
  push,
  get,
  update,
} from "firebase/database";

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
  setCardIsDeleted: () => {},
  cardIsDeleted: Boolean,
  setEditCadrdButtonIsToched: () => {},
  editCadrdButtonIsToched: Boolean,
});

export const CardsStoreContextProvider = (props) => {
  const location = useLocation();
  const currentLocation = location.pathname.endsWith("/my-cards");
  const favCardsLocation = location.pathname.endsWith("/fav-cards");

  const uCtx = useContext(UsersStoreContext);

  const [cardIsDeleted, setCardIsDeleted] = useState(false);
  const [cards, setCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
  const [editPageActive, setEditPageActive] = useState(false);
  const [editCard, setEditCard] = useState([]);
  const [addCadrdButtonIsToched, setAddCadrdButtonIsToched] = useState(false);
  const [editCadrdButtonIsToched, setEditCadrdButtonIsToched] = useState(false);
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

  useEffect(() => {
    const fetchFavCards = async () => {
      const response = await fetch(
        "https://react-course-http-bce24-default-rtdb.firebaseio.com/cards.json"
      );
      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
      const responseData = await response.json();
      // console.log(responseData);
      const loadedCards = [];

      for (const key in responseData)
        if (responseData[key].fav === true) {
          {
            loadedCards.push({
              id: key,
              key: key,
              name: responseData[key].name,
              description: responseData[key].description,
              src: responseData[key].src,
              alt: responseData[key].alt,
              cardNumber: responseData[key].id,
              country: responseData[key].country,
              city: responseData[key].city,
              street: responseData[key].street,
              street: responseData[key].street,
              phone: responseData[key].phone,
              url: responseData[key].url,
              fav: responseData[key].fav,
            });
          }
        }
      return loadedCards;
    };

    fetchFavCards().then((loadedCards) => {
      // Обновляем состояние users с помощью полученных данных
      setFavCards(loadedCards);
    });
    // console.log(fetchUsers().PromiseResult);
  }, [favCardsLocation]);

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
            fav: responseData[key].fav,
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

  const updateCardData = async (cardId, updatedData) => {
    const path = `cards/${cardId}`;
    try {
      // Обновляем данные карточки по указанному пути
      await set(ref(firebaseDatabase, path), updatedData);
      console.log(`Данные карточки с ключом ${cardId} успешно обновлены.`);

      // Обновляем состояние cards с новыми данными
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === cardId ? { ...card, ...updatedData } : card
        )
      );
    } catch (error) {
      console.error(
        `Ошибка при обновлении данных карточки с ключом ${cardId}:`,
        error
      );
    }
  };

  const editCardisActiveHandler = (cardId) => {
    const cardToEdit = cards.find((card) => card.id === cardId);
    setEditCard(cardToEdit);
    setEditPageActive(true);
  };

  const submitEditCardHandler = (currentCard) => {
    updateCardData(currentCard.id, currentCard);
    setEditPageActive(false);
    setEditCadrdButtonIsToched(true);
  };

  // console.log(editCard);
  // console.log(cards);
  // console.log(editPageActive);

  const deleteCardHandle = async (cardId) => {
    const path = `cards/${cardId}`;
    try {
      await remove(ref(firebaseDatabase, path));
      console.log(`Карточка с ключом ${cardId} успешно удалена.`);
      setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
      setCardIsDeleted(true);
    } catch (error) {
      console.error(`Ошибка при удалении карточки с ключом ${cardId}:`, error);
    }
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

  const addOrRemoveCardFromFav = async (cardId, newFavValue) => {
    const path = "cards"; // Путь к карточкам

    try {
      // Обновляем свойство 'fav' карточки по указанному id
      await update(ref(firebaseDatabase, `${path}/${cardId}`), {
        fav: newFavValue,
      });

      console.log(
        `Свойство 'fav' карточки с ID ${cardId} обновлено в ${newFavValue}.`
      );
    } catch (error) {
      console.error("Ошибка при обновлении свойства 'fav' карточки:", error);
    }
  };

  const FavCardsHandler = (newCardId, favData) => {
    if (!favCards.find((card) => card.id === newCardId)) {
      const updatedCardList = [
        ...favCards,
        ...cards.filter((card) => card.id === newCardId),
      ];
      setFavCards(updatedCardList);
    } else {
      favCardDeleteHandler(newCardId);
    }
    addOrRemoveCardFromFav(newCardId, !favData);
  };

  return (
    <CardsStoreContext.Provider
      value={{
        isCardFavorite,
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
        setCardIsDeleted,
        cardIsDeleted,
        setEditCadrdButtonIsToched,
        editCadrdButtonIsToched,
      }}
    >
      {props.children}
    </CardsStoreContext.Provider>
  );
};

export default CardsStoreContext;
