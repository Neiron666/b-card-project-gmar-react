import React, { useContext, useEffect, useState } from "react";
import styles from "./main.module.css";
import Router from "../../routes/Router";
import EditCardPage from "../../pages/EditCardPage";
import CardsStoreContext from "../../store-context/CardsStoreContext";
import EditUserPage from "../../pages/EditUserPage";
import UsersStoreContext from "../../store-context/UsersStoreContext";
import Alert from "../../components/custom-components/Alert";

const Main = () => {
  const ctx = useContext(CardsStoreContext);
  const uCtx = useContext(UsersStoreContext);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleAllertMessege = (messege) => {
    // Логика для выполнения действия
    setAlertMessage(messege); // Установите новое сообщение
  };

  useEffect(() => {
    const userLogged = !!uCtx.currentUserSession && uCtx.loginButtonIsToched;
    const cardAdded = ctx.addCadrdButtonIsToched;
    // const cardAdded =
    if (userLogged) {
      handleAllertMessege("Login Succes");
      uCtx.setLoginButtonIsToched(false);
    }
    if (cardAdded) {
      handleAllertMessege("Card is Added");
      ctx.setAddCadrdButtonIsToched(false);
    }

    const timer = setTimeout(() => {
      setAlertMessage(null); // Закрываем алерт через 5 секунд (можете изменить время)
    }, 2000);
    return () => clearTimeout(timer);
  }, [uCtx.currentUserSession, ctx.cards]);

  return (
    <span className={styles.container}>
      {alertMessage ? <Alert>{alertMessage}</Alert> : null}
      {uCtx.editUserPageActive ? (
        <EditUserPage />
      ) : ctx.editPageActive ? (
        <EditCardPage />
      ) : (
        <Router />
      )}
    </span>
  );
};

export default Main;
