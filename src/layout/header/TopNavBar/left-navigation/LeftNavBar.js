import React from "react";
import LottieLogo from "../logo/LottieLogo";
import styles from "./leftNavBar.module.css";
import CustomLink from "../../../../components/custom-components/CustomLink";
import { useContext } from "react";
import UsersStoreContext from "../../../../store-context/UsersStoreContext";

// const setActive = ({ isActive }) => (isActive ? `${styles.active}` : ""); Один пример оставил*
const LeftNavBar = () => {
  const ctx = useContext(UsersStoreContext);

  return (
    <div className={styles.leftNavBar}>
      <LottieLogo />
      {/* <NavLink to="/" className={setActive}>
        About
      </NavLink> Один пример оставил*/}
      <CustomLink className={styles.active} to="/">
        About
      </CustomLink>
      {ctx.currentUserSession ? (
        <>
          <CustomLink className={styles.active} to="/fav-cards">
            Fav Cards
          </CustomLink>
          <CustomLink className={styles.active} to="/my-cards">
            My Cards
          </CustomLink>
          <CustomLink className={styles.active} to="/create-card">
            Create Card
          </CustomLink>
        </>
      ) : null}
    </div>
  );
};

export default LeftNavBar;
