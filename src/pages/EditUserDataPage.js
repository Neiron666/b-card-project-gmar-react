import React, { useContext } from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import UsersStoreContext from "../store-context/UsersStoreContext";
import styles from "./EditUserDataPage.module.css";
import FormInputUI from "../components/UI/form-UI/FormInputUI";

const EditUserDataPage = () => {
  const uCtx = useContext(UsersStoreContext);
  const navigate = useNavigate();

  const editUserFun = () => {
    navigate("/edit-user");
    uCtx.editUserisActiveHandler();
  };

  const logoutFn = () => {
    uCtx.onLogout();
    navigate("/");
  };

  return (
    <>
      <h1>Edit User Data Page</h1>
      <p>Here youcan choose what to edit</p>
      <hr />
      <FormInputUI className={styles["button-container"]}>
        <Button onClick={editUserFun}>Edit User Data</Button>
        <Button onClick={logoutFn}>Logout</Button>
      </FormInputUI>
    </>
  );
};

export default EditUserDataPage;
