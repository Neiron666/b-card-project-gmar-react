import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={`${styles.layout}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
