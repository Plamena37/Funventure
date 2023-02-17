import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./Navigation.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="nav__logo__wrapper">
        <Link to="/">
          <img
            className="nav__logo"
            src={require("../../../images/logo/logo-new.png")}
            alt="Logo"
          />
        </Link>
        <Link to="/" className="router__link logo">
          <h3 className="nav__header">Funventure</h3>
        </Link>
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavigationBar;
