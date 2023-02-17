import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import "../../../Variables.css";
import { useContext } from "react";
import { EventContext } from "../../../context/EventsContextProvider";
import FavoritesContext from "../../../context/FavoritesContext";
import { motion } from "framer-motion";
import { enableBodyScroll } from "body-scroll-lock";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const navigate = useNavigate();
  const eventCtx = useContext(EventContext);

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

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
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={closeMobileMenuHandler}
      >
        <Link to="/" className="router__link">
          Home
        </Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={closeMobileMenuHandler}
      >
        <Link to="/events" className="router__link">
          Events
        </Link>
      </motion.li>

      {isLoggedIn && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={closeMobileMenuHandler}
        >
          <Link to="/favorite" className="router__link">
            My Favorite ({totalFavoriteEvents})
          </Link>
        </motion.li>
      )}

      {isLoggedIn && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={closeMobileMenuHandler}
        >
          <Link to="/add-event" className="router__link">
            Add event
          </Link>
        </motion.li>
      )}

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={closeMobileMenuHandler}
      >
        <Link to="/faq" className="router__link">
          FAQ
        </Link>
      </motion.li>

      {!isLoggedIn && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}
          onClick={closeMobileMenuHandler}
        >
          <Link to="/login" className="router__link last">
            LogIn / Sign up
          </Link>
        </motion.li>
      )}

      {isLoggedIn && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.6 }}
          onClick={closeMobileMenuHandler}
        >
          <Link to="/profile" className="router__link">
            Profile
          </Link>
        </motion.li>
      )}

      {isLoggedIn && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.7 }}
          onClick={closeMobileMenuHandler}
        >
          <button className="logout-button" onClick={logoutHandler}>
            Log out
          </button>
        </motion.li>
      )}
    </ul>
  );
};

export default NavLinks;
