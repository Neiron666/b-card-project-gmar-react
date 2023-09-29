import React, { useContext } from "react";
import styles from "./rightNavBar.module.css";
import UserNotLoged from "./UserNotLoged";
import SearchBar from "../search-bar/SearchBar";
import UserLogged from "./UserLogged";
import UsersStoreContext from "../../../../store-context/UsersStoreContext";
import { useNavigate } from "react-router-dom";

const user = true;
const RightNavBar = () => {
  const navigate = useNavigate();
  const uCtx = useContext(UsersStoreContext);

  const editUserFun = () => {
    navigate("/edit-user");
    uCtx.editUserisActiveHandler();
  };
  return (
    <div className={styles.rightNavBar}>
      <SearchBar />
      {uCtx.currentUserSession ? (
        <UserLogged onClick={editUserFun} />
      ) : (
        <UserNotLoged />
      )}
    </div>
  );
};

export default RightNavBar;
