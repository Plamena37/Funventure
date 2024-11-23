import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import "../../../Variables.css";
import { useContext } from "react";
import { EventContext } from "../../../context/EventsContextProvider";
import FavoritesContext from "../../../context/FavoritesContext";
import { enableBodyScroll } from "body-scroll-lock";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const navigate = useNavigate();
  const eventCtx = useContext(EventContext);

  const favoritesCtx = useContext(FavoritesContext);
  const totalFavoriteEvents = favoritesCtx.totalFavorites;

  const isLoggedIn = eventCtx.isLoggedIn;

  let logoutHandler = () => {
    eventCtx.logout();
    navigate("/login");
  };

  const closeMobileMenuHandler = () => {
    enableBodyScroll(document);
    return isMobile && closeMobileMenu();
  };

  return (
    <ul className="nav__list">
      <li onClick={closeMobileMenuHandler}>
        <Link to="/" className="router__link">
          Home
        </Link>
      </li>

      <li onClick={closeMobileMenuHandler}>
        <Link to="/events" className="router__link">
          Events
        </Link>
      </li>

      {isLoggedIn && (
        <li onClick={closeMobileMenuHandler}>
          <Link to="/favorite" className="router__link">
            My Favorite ({totalFavoriteEvents})
          </Link>
        </li>
      )}

      {isLoggedIn && (
        <li onClick={closeMobileMenuHandler}>
          <Link to="/add-event" className="router__link">
            Add event
          </Link>
        </li>
      )}

      <li onClick={closeMobileMenuHandler}>
        <Link to="/faq" className="router__link">
          FAQ
        </Link>
      </li>

      {!isLoggedIn && (
        <li onClick={closeMobileMenuHandler}>
          <Link to="/login" className="router__link last">
            LogIn / Sign up
          </Link>
        </li>
      )}

      {isLoggedIn && (
        <li onClick={closeMobileMenuHandler}>
          <Link to="/profile" className="router__link">
            Profile
          </Link>
        </li>
      )}

      {isLoggedIn && (
        <li onClick={closeMobileMenuHandler}>
          <button className="logout-button" onClick={logoutHandler}>
            Log out
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
