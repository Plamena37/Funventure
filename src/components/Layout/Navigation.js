import "./Navigation.css";
import "../../Colors.css";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";

export default function Navigation() {
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
        <li>
          <Link to="/favorite" className="router__link">
            My Favorite
          </Link>
        </li>
        <li>
          <Link to="/add-event" className="router__link">
            Add event
          </Link>
        </li>
        <li>
          <Link to="/faq" className="router__link">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/login" className="router__link last">
            LogIn / Sign up
          </Link>
        </li>
        {/* FIXME */}
        <li>
          <Link to="/profile" className="router__link">
            Profile
          </Link>
        </li>
        <li>Log out</li>
        <li>
          <Link to="/profile" className="router__link profile__img__link">
            <img
              src={localStorage.getItem("profilePic")}
              className="google__img"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
