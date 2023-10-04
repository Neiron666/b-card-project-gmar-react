import React, { useContext, useState } from "react";
import FormInputUI from "../components/UI/form-UI/FormInputUI";
import styles from "./CreateCardPage.module.css";
import Button from "../components/Button/Button";
import UsersStoreContext from "../store-context/UsersStoreContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const uCtx = useContext(UsersStoreContext);

  const navigate = useNavigate();
  const initialFormData = {
    id: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    userCards: [],
  };
  const [formData, setFormData] = useState(initialFormData);
  const [userAlredyExist, setUserAlredyExist] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formData);

  const resetForm = () => {
    return setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uCtx.users.find((user) => user.email === formData.email)) {
      setUserAlredyExist(true);
      resetForm();
      return;
    }
    const newUserData = { ...formData, id: formData.email, userCards: [] };
    uCtx.addNewUserHandler(newUserData);
    resetForm();
    navigate("/");
  };
  const alredyExistedUser = (
    <p>This user already registered, please Login or choose another email</p>
  );
  return (
    <>
      <h1>Sign Up Page</h1>
      <p>Please Sign Up</p>
      <hr />
      <FormInputUI className={styles["new-card"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles.controls}>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              id="userName"
              name="name"
              placeholder="Input Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className={styles.controls}>
            <label htmlFor="userLastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="userLastName"
              placeholder="Input Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className={styles.controls}>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Email"
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
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className={styles["error-messege"]}>
            {userAlredyExist && alredyExistedUser}
          </div>
          <Button type="submit" className={styles.button}>
            Sign Up
          </Button>
        </form>
      </FormInputUI>
    </>
  );
};

export default SignUpPage;
