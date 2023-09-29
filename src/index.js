import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CardsStoreContextProvider } from "./store-context/CardsStoreContext";
import { UsersStoreContextProvider } from "./store-context/UsersStoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UsersStoreContextProvider>
      <CardsStoreContextProvider>
        <App />
      </CardsStoreContextProvider>
    </UsersStoreContextProvider>
  </BrowserRouter>
);
