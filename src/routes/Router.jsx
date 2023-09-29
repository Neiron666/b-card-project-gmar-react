import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import FavCardsPage from "../pages/FavCardsPage";
import MyCardsPage from "../pages/MyCardsPage";
import NewCardPage from "../pages/CreateCardPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import CreateCardPage from "../pages/CreateCardPage";
import EditCardPage from "../pages/EditCardPage";
import ErrorPage from "../pages/ErrorPage";
import EditUserPage from "../pages/EditUserPage";

const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Перенаправляем на главную страницу при монтировании компонента
    navigate("/");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="fav-cards" element={<FavCardsPage />} />
      <Route path="my-cards" element={<MyCardsPage />} />
      <Route path="new-card" element={<NewCardPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="create-card" element={<CreateCardPage />} />
      <Route path="edit-card-page" element={<EditCardPage />} />
      <Route path="edit-user" element={<EditUserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
