import React, { useContext, useEffect } from "react";
import UsersStoreContext from "../store-context/UsersStoreContext";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const uCtx = useContext(UsersStoreContext);

  useEffect(() => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const expirationDate = new Date().getTime() + oneDayInMilliseconds;
    localStorage.setItem("firebaseKeyExpiration", expirationDate);
    const storedKey = localStorage.getItem("firebaseKey");
    if (storedKey && expirationDate) {
      const currentDate = new Date().getTime();
      if (currentDate <= parseInt(expirationDate)) {
        const storedKey = localStorage.getItem("firebaseKey");
        if (storedKey) {
          // Есть сохраненный ключ, выполните автоматический вход
          const currentUser = uCtx.users.find((user) => user.id === storedKey);

          // console.log(currentUser);

          if (currentUser) {
            uCtx.loginCurrentUser(currentUser);
          }
        }

        // Ключ действителен, пользователь может быть автоматически вошел
        // Выполните автоматический вход для пользователя, используя сохраненный ключ
      } else {
        // Ключ истек, удаляем его
        localStorage.removeItem("firebaseKey");
        localStorage.removeItem("firebaseKeyExpiration");
      }
    }
  }, [uCtx]);

  return (
    <>
      <h1> About Page </h1>
      <p>
        Here You can look how to create and use a new cards in your profile.
      </p>
    </>
  );
};

export default AboutPage;
