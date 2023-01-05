import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EventsContextProvider from "./context/EventsContextProvider";
import { FavoritesContextProvider } from "./context/FavoritesContext";

ReactDOM.render(
  <React.StrictMode>
    <EventsContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </EventsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
