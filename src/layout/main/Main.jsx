import React, { useContext, useEffect } from "react";
import styles from "./main.module.css";
import Router from "../../routes/Router";
import EditCardPage from "../../pages/EditCardPage";
import CardsStoreContext from "../../store-context/CardsStoreContext";
import EditUserPage from "../../pages/EditUserPage";
import UsersStoreContext from "../../store-context/UsersStoreContext";

const Main = () => {
  const ctx = useContext(CardsStoreContext);
  const uCtx = useContext(UsersStoreContext);

  // useEffect(() => {}, [ctx.editPageActive]);
  return (
    <span className={styles.container}>
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
