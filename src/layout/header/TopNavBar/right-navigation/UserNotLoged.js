import React from "react";
import styles from "./rightNavBar.module.css";
import CustomLink from "../../../../components/custom-components/CustomLink";

// const setActive = ({ isActive }) => (isActive ? `${styles.active}` : "");

const UserNotLoged = () => {
  return (
    <>
      <CustomLink className={styles.active} to="/signup">
        Signup
      </CustomLink>
      <CustomLink className={styles.active} to="/login">
        Login
      </CustomLink>
    </>
  );
};

export default UserNotLoged;
