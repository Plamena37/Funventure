import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import "../../../Variables.css";
import { useContext } from "react";
import { EventContext } from "../../../context/EventsContextProvider";
import FavoritesContext from "../../../context/FavoritesContext";
import NavLinks from "./NavLinks";

export default function Navigation() {
  // const navigate = useNavigate();
  // const eventCtx = useContext(EventContext);

  // const favoritesCtx = useContext(FavoritesContext);
  // const totalFavoriteEvents = favoritesCtx.totalFavorites;

  // let favoritesCount = JSON.parse(localStorage.getItem("favorites"));

  // const isLoggedIn = eventCtx.isLoggedIn;

  // let logoutHandler = () => {
  //   eventCtx.logout();
  //   navigate("/login");
  // };

  return (
    <nav className="navigation">
      <NavLinks />
    </nav>
  );
}
