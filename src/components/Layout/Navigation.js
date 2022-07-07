import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { Avatar, Button, makeStyles, TextField } from "@material-ui/core";

import "./Navigation.css";
import "../../Colors.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  createRecipeButton: {
    marginLeft: "1vw",
  },
}));

export default function Navigation() {
  // FIXME
  const { currentUser, loadedUserFromStorage } = useContext(
    AuthenticationContext
  );
  const { logout, login } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [navigationBarStyles, setNavigationBarStyles] = useState(false);

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (logoutError) {
      console.log(logoutError);
    }
  }

  // async function handleLogin(event) {
  //   event.preventDefault();

  //   try {
  //     //This will wait for the result and if it fails it goes to the catch
  //     await login(textFieldState.email, textFieldState.password);

  //     //Redirect to home upon sucsessfull login
  //     navigate("/");
  //   } catch (loginError) {
  //     console.log(loginError);
  //   }
  // }

  // function userNavigationButton() {
  //   if (!loadedUserFromStorage) {
  //     return <div style={{ width: "5px" }}></div>;
  //   }
  //   console.log(currentUser);
  //   if (currentUser) {
  //     const firstLetter = currentUser?.displayName?.charAt(0).toUpperCase();
  //     return (
  //       <>
  //         <button onClick={handleLogout} className="logout-button">
  //           Log Out
  //         </button>
  //         <Link to="/profile" style={{ textDecoration: "none" }}>
  //           <Avatar className={classes.avatar} src={currentUser?.photoURL}>
  //             {firstLetter}
  //           </Avatar>
  //         </Link>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <Link to="/login" className="nav-button">
  //         Sign Up / Login
  //       </Link>
  //     );
  //   }
  // }
  // FIXME
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
          {currentUser && location.pathname !== "/profile" && (
            <Link to="/favorite" className="router__link">
              My Favorite
            </Link>
          )}
        </li>
        <li>
          {currentUser && location.pathname !== "/profile" && (
            <Link to="/add-event" className="router__link">
              Add event
            </Link>
          )}
        </li>
        <li>
          <Link to="/faq" className="router__link">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/profile" className="router__link">
            Profile
          </Link>
        </li>
        {/* FIXME */}
        {/* <div className="user-info-wrapper">{userNavigationButton()}</div> */}
        <li>
          <Link to="/login" className="router__link last">
            LogIn / Sign up
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>

        {/* <li>
          <Link to="/profile" className="router__link profile__img__link">
            <img
              src={localStorage.getItem("profilePic")}
              className="google__img"
            />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
