import React, { useContext, useEffect } from "react";
import FormInputUI from "../components/UI/form-UI/FormInputUI";
import styles from "./CreateCardPage.module.css";
import Button from "../components/Button/Button";
import { useState } from "react";
import UsersStoreContext from "../store-context/UsersStoreContext";
import { useNavigate } from "react-router-dom";
import Alert from "../components/custom-components/Alert";

const LoginPage = () => {
  const uCtx = useContext(UsersStoreContext);
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitTuched, setIsSubmitTuched] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);
  const [wasPasswordInputTouched, setWasPasswordInputTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailInputLostFocusHandler = () => {
    setWasEmailInputTouched(true);
  };
  const passwordInputLostFocusHandler = () => {
    setWasPasswordInputTouched(true);
  };
  const isEmailValid = formData.email.includes("@");
  const isPasswordValid = formData.password.trim() !== "";

  const isFormValid = isEmailValid && isPasswordValid;

  const isNoFoundUser = isSubmitTuched && !isUserRegistered;

  console.log(isFormValid);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const isUser = uCtx.users.find((user) => user.email === formData.email);
    if (isUser) {
      if (
        isUser.email === formData.email &&
        isUser.password === formData.password
      ) {
        setIsUserRegistered(true);
        uCtx.loginCurrentUser(isUser);
        uCtx.setLoginButtonIsToched(true);
        localStorage.setItem("firebaseKey", isUser.id);

        navigate("/");
      }
    } else {
      setIsSubmitTuched(true);
    }
    setFormData(initialFormData);
    console.log(isUserRegistered);
  };

  console.log(isUserRegistered);
  console.log(uCtx.users);

  return (
    <>
      <h1>Login Page</h1>
      <p>Please Login</p>
      <hr />
      <FormInputUI className={styles["new-card"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles.controls}>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Email"
              onBlur={emailInputLostFocusHandler}
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className={styles.controls}>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="password"
              id="userPassword"
              placeholder="Input Password"
              onBlur={passwordInputLostFocusHandler}
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          {isNoFoundUser ? <p>User not found in the database.</p> : ""}
          <Button
            disabled={!isFormValid}
            type="submit"
            className={styles.button}
          >
            Login
          </Button>
        </form>
      </FormInputUI>
    </>
  );
};

export default LoginPage;
