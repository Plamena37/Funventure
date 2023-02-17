import "./Footer.css";
import "../../../Variables.css";
import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <footer className="mobile__footer">
      {" "}
      <div className="footer__desc">
        <div className="footer__logo">
          <Link to="/" className="router__link logo">
            <img
              className="footer__logo__img"
              src={require("../../../images/logo/logo-new.png")}
              alt="FunVenture logo"
            />
          </Link>
          <Link to="/" className="router__link logo">
            <h3 className="nav__header">Funventure</h3>
          </Link>
        </div>
        <p>
          The voice of travel committed to long-term, sustainable growth of
          adventure travel.
        </p>

        <div className="footer__logo__links">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
        </div>

        <div className="mobile__footer__nav">
          <nav className="footer__about">
            <h3>About</h3>
            <p>Contact Us</p>
            <p>Log In</p>
            <p>Create Account</p>
          </nav>
          <nav className="footer__recources">
            <h3>Resources</h3>
            <p>All Events</p>
            <p>Wishlist</p>
            <p>FAQ's</p>
          </nav>
          <nav className="footer__legal">
            <h3>Legal</h3>
            <p>Terms of Use</p>
            <p>Privicy Policy</p>
          </nav>
        </div>
        <p className="footer__copyright">
          Copyright &copy; {new Date().getFullYear()} by Funventure. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
