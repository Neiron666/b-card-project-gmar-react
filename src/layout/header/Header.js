import React from "react";
import styles from "./header.module.css";
import NavBar from "./TopNavBar/NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
