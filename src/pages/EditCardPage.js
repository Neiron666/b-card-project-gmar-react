import React, { useContext, useState } from "react";
import CardsStoreContext from "../store-context/CardsStoreContext";
import styles from "./CreateCardPage.module.css";
import FormInputUI from "../components/UI/form-UI/FormInputUI";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import CustomForm from "../components/custom-components/CustomForm";

const EditCardPage = () => {
  const ctx = useContext(CardsStoreContext);

  const editCard = ctx.editCard;

  const [formData, setFormData] = useState(editCard);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);

  const handleSubmit = (formData) => {
    ctx.onEditCard(formData);
  };

  return (
    <>
      <h1>Edit Card Page</h1>
      <hr />
      <CustomForm onSubmit={handleSubmit} onInitialFormData={editCard} />
    </>
  );
};

export default EditCardPage;
