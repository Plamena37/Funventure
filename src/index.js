import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EventsContextProvider from "./context/EventsContextProvider";
import { FavoritesContextProvider } from "./context/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EventsContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </EventsContextProvider>
  </React.StrictMode>
);
