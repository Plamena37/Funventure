import React, { useState } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./LogInForm.css";
import "../../Colors.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../firebase";

export default function Form() {
  // LOG IN
  const [logInFieldsState, setLogInFieldsState] = useState({
    email: "",
    password: "",
  });

  // SIGN UP
  const [signUpFieldsState, setSignUpFieldsState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [active, setActive] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleLogInChange(event) {
    //Set the state
    setLogInFieldsState({
      ...logInFieldsState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSignUpChange(event) {
    //Set the state
    setSignUpFieldsState({
      ...signUpFieldsState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);

    alert(`(${isSubmit}) this is the submit state`);
  }

  function toggleActive() {
    setActive((prevActive) => !prevActive);
  }

  // FIXME
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpFieldsState.username,
        signUpFieldsState.email,
        signUpFieldsState.password,
        signUpFieldsState.confirmPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInFieldsState.email,
        logInFieldsState.password
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  // FIXME

  return (
    <form className="form form--signup">
      <nav className="login__nav">
        <button
          className={active ? "form__btn btn--active" : "form__btn"}
          onClick={() => setActive(!active)}
        >
          Login
        </button>
        <span className="form__span">|</span>
        <button
          className={!active ? "form__btn btn--active" : "form__btn "}
          onClick={() => setActive(!active)}
        >
          Sign up
        </button>
      </nav>

      {active ? (
        <LogInForm
          logInFieldsState={logInFieldsState}
          handleLogInChange={handleLogInChange}
          handleSubmit={handleSubmit}
          handleLogIn={login}
        />
      ) : (
        <SignUpForm
          signUpFieldsState={signUpFieldsState}
          handleSignUpChange={handleSignUpChange}
          handleSubmit={handleSubmit}
          handleRegister={register}
          signInWithGoogle={signInWithGoogle}
        />
      )}
      {/* <div className="btn__wrapper"> */}
      {/* <button className="btn btn--primary">
        {active ? "Login" : "Signup"}
      </button> */}
      {/* <button className="btn btn--secondary">
        Sign {active ? "in" : "up"} with google
      </button> */}
      {/* </div> */}
    </form>
  );
}
