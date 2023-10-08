import React, { useContext, useState } from "react";
import FormInputUI from "../components/UI/form-UI/FormInputUI";
import styles from "./CreateCardPage.module.css";
import Button from "../components/Button/Button";
import CardsStoreContext from "../store-context/CardsStoreContext";
import UsersStoreContext from "../store-context/UsersStoreContext";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../components/custom-components/CustomForm";

const CreateCardPage = () => {
  const initialFormData = {
    title: "",
    id: "",
    userId: "",
    name: "",
    description: "",
    src: "",
    alt: "",
    phone: "",
    address: "",
    url: "",
    email: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    fav: false,
  };
  const navigate = useNavigate();

  const ctx = useContext(CardsStoreContext);

  const uCtx = useContext(UsersStoreContext);

  const handleFormSubmit = (formData, idProvider) => {
    const newCardData = {
      ...formData,
      userId: uCtx.currentUserSession.id,
    };
    ctx.onAddCard(newCardData);

    ctx.setAddCadrdButtonIsToched(true);
    navigate("/my-cards");
  };

  return (
    <>
      <h1>Create a New Card</h1>
      <p>Here you can create a new business card.</p>
      <hr />
      <CustomForm
        onSubmit={handleFormSubmit}
        onInitialFormData={initialFormData}
      />
    </>
  );
};

export default CreateCardPage;
