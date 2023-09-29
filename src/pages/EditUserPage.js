import React from "react";
import FormInputUI from "../components/UI/form-UI/FormInputUI";
import Button from "../components/Button/Button";
import styles from "./CreateCardPage.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UsersStoreContext from "../store-context/UsersStoreContext";

const EditUserPage = () => {
  const uCtx = useContext(UsersStoreContext);

  const initialFormData = {
    id: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
  };
  const editUser = uCtx.editUser;
  console.log(editUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(editUser);

  const resetForm = () => {
    return setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = { ...formData, id: formData.email };
    uCtx.submitEditUserHandler(newUserData);
    resetForm();
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Edit User Page</h1>
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
              disabled={true}
            />
          </div>
          <div className={styles.controls}>
            <label htmlFor="userPassword">Password</label>
            <input
              type="text"
              name="password"
              id="userPassword"
              placeholder="Input Password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </FormInputUI>
    </>
  );
};

export default EditUserPage;
