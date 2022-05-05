import React, { useState } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./LogInForm.css";
import "../../Colors.css";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../firebase";

export default function Form() {
  const navigate = useNavigate();

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

  const [logInfieldErrors, setLogInFieldErrors] = useState({
    email: false,
    password: false,
  });

  const [signUpfieldErrors, setSignUpFieldErrors] = useState({
    username: false,
    email: false,
    password: false,
    // confirmPassword: false,
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
    username: false,
  });

  const validationConditions = {
    email: /(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/,
    username: /(^$)|(^[A-Za-z0-9]+$)/,
    password: /(^$)|(^.{5,}$)/,
  };

  const handleValidation = (fieldName, fieldValue) => {
    if (fieldName !== "confirmPassword") {
      setFieldErrors({
        ...fieldErrors,
        [fieldName]: !validationConditions[fieldName].test(fieldValue),
      });
    }
  };

  function handleLogInChange(event) {
    const { name, value } = event.target;
    //Set the state
    setLogInFieldsState({
      ...logInFieldsState,
      [name]: value,
    });
    handleValidation(name, value);
  }

  function handleSignUpChange(event) {
    const { name, value } = event.target;
    //Set the state
    setSignUpFieldsState({
      ...signUpFieldsState,
      [name]: value,
    });
    handleValidation(name, value);
  }

  // PUSHES THE ERROR BOOLEANS IN AN ARRAY
  const pushErrorsInArray = () => {
    let arrayWithValues = [];
    for (const errorValue in fieldErrors) {
      arrayWithValues.push(fieldErrors[errorValue]);
    }
    // IF THE ARRAY CONTAINS A FALSY VALUE, THE OPERATION STOPS AND RETURNS FALSE
    return arrayWithValues.some((element) => element === true);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let checkForErrors = pushErrorsInArray();

    if (!checkForErrors) {
      navigate("/");
    }
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
    <div className="form form--signup">
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
          error={fieldErrors}
          pushErrorsInArray={pushErrorsInArray}
        />
      ) : (
        <SignUpForm
          signUpFieldsState={signUpFieldsState}
          handleSignUpChange={handleSignUpChange}
          handleSubmit={handleSubmit}
          handleRegister={register}
          signInWithGoogle={signInWithGoogle}
          error={fieldErrors}
          pushErrorsInArray={pushErrorsInArray}
        />
      )}
    </div>
  );
}
