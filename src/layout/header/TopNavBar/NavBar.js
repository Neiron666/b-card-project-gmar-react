import React from "react";
import styles from "./navBar.module.css";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <LeftNavBar />
      <RightNavBar />
    </nav>
  );
};

export default NavBar;
