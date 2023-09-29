import React, { useContext, useState } from "react";
import CardsStoreContext from "../store-context/CardsStoreContext";
import styles from "./CreateCardPage.module.css";
import FormInputUI from "../components/UI/form-UI/FormInputUI";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const EditCardPage = () => {
  const ctx = useContext(CardsStoreContext);

  const navigate = useNavigate();

  const resetForm = () => {
    return setFormData({
      id: "",
      title: "",
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
    });
  };

  const editCard = ctx.editCard;

  const [formData, setFormData] = useState(editCard);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.onEditCard(formData);
    resetForm();
    navigate("/my-cards");
  };

  return (
    <>
      <h1>Edit Card Page</h1>
      <hr />
      <FormInputUI className={styles["new-card"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles.controls}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              value={formData.title}
              // required
            />
          </div>
          <div className={styles.controls}>
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description*"
              onChange={handleChange}
              value={formData.description}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              onChange={handleChange}
              value={formData.phone}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              onChange={handleChange}
              value={formData.email}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>Image URL</label>
            <input
              type="url"
              name="src"
              onChange={handleChange}
              placeholder="Image URL*"
              value={formData.src}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>Image alt</label>
            <input
              type="text"
              name="alt"
              onChange={handleChange}
              placeholder="Image alt*"
              value={formData.alt}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="State*"
              onChange={handleChange}
              value={formData.state}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country*"
              onChange={handleChange}
              value={formData.country}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City*"
              onChange={handleChange}
              value={formData.city}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>Street</label>
            <input
              type="text"
              name="street"
              placeholder="Street*"
              onChange={handleChange}
              value={formData.street}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>House Number</label>
            <input
              type="number"
              name="houseNumber"
              placeholder="House Number*"
              onChange={handleChange}
              value={formData.houseNumber}
              // required
            />
          </div>

          <div className={styles.controls}>
            <label>ZIP</label>
            <input
              type="number"
              name="zip"
              onChange={handleChange}
              placeholder="ZIP"
              value={formData.zip}
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

export default EditCardPage;
