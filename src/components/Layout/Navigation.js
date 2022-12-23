import { Link, useNavigate } from "react-router-dom";

import "./Navigation.css";
import "../../Variables.css";
import { useContext } from "react";
import { EventContext } from "../../context/EventsContextProvider";

export default function Navigation() {
  const navigate = useNavigate();
  const eventCtx = useContext(EventContext);

  const isLoggedIn = eventCtx.isLoggedIn;

  let logoutHandler = () => {
    eventCtx.logout();
    navigate("/login");
  };

  // BUG
  // ADD USERNAME

  return (
    <nav className="nav">
      <Link to="/">
        <img
          className="nav__logo"
          src={require("../../images/logo/logo-new.png")}
          alt="Logo image"
        />
      </Link>
      <Link to="/" className="router__link logo">
        <h3 className="nav__header">FunVenture</h3>
      </Link>

      <ul className="nav__list">
        <li>
          <Link to="/" className="router__link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/events" className="router__link">
            Events
          </Link>
        </li>

        {isLoggedIn && (
          <li>
            <Link to="/favorite" className="router__link">
              My Favorite
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link to="/add-event" className="router__link">
              Add event
            </Link>
          </li>
        )}

        <li>
          <Link to="/faq" className="router__link">
            FAQ
          </Link>
        </li>

        {isLoggedIn && (
          <li>
            <Link to="/profile" className="router__link">
              Profile
            </Link>
          </li>
        )}

        {!isLoggedIn && (
          <li>
            <Link to="/login" className="router__link last">
              LogIn / Sign up
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link to="/profile" className="router__link username__link">
              {/* Hi, {localStorage.getItem("username").replace(/"/g, "")} */}
              Hi, {localStorage.getItem("username")}
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <button className="logout-button" onClick={logoutHandler}>
            {" "}
            Log out
          </button>
        )}
      </ul>
    </nav>
  );
}
