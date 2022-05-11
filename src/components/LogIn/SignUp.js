import "./AuthForm.css";
import "../../Colors.css";
import { TextField, Button } from "@material-ui/core";
import { validations } from "../validationMessages";
import { signInWithGoogle } from "../../firebase";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [signUpFieldsState, setSignUpFieldsState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    //Set the state
    setSignUpFieldsState({
      ...signUpFieldsState,
      [name]: value,
    });
    handleValidation(name, value);
  };

  // PUSHES THE ERROR BOOLEANS IN AN ARRAY
  const pushErrorsInArray = () => {
    let arrayWithValues = [];
    for (const errorValue in fieldErrors) {
      arrayWithValues.push(fieldErrors[errorValue]);
    }
    // IF THE ARRAY CONTAINS A FALSY VALUE, THE OPERATION STOPS AND RETURNS FALSE
    return arrayWithValues.some((element) => element === true);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let checkForErrors = pushErrorsInArray();

  //   if (!checkForErrors) {
  //     navigate("/");
  //   }
  // };

  // FIXME
  const { signUp, signUpWithGoogle } = useContext(AuthenticationContext);

  const [error, setError] = useState({ didError: false, message: "" });

  async function handleSignUpWithGoogle() {
    try {
      await signUpWithGoogle();
      navigate("/");
    } catch (loginError) {
      console.log("Login error!!!");
    }
  }

  //Sign up with Email and password
  async function handleSubmit(event) {
    event.preventDefault();
    //  FIXME
    let checkForErrors = pushErrorsInArray();

    if (!checkForErrors) {
      navigate("/");
    }
    //  FIXME

    //Check if the passwords match
    if (signUpFieldsState.password !== signUpFieldsState.confirmPassword) {
      return setError({
        ...error,
        didError: true,
        message: "Passwords must match",
      });
    } else {
      setError({ ...error, didError: false, message: "" });
    }

    //SignUp
    try {
      setError({ ...error, message: "" });

      //This will wait for the result and if it fails it goes to the catch
      await signUp(
        signUpFieldsState.email,
        signUpFieldsState.password,
        signUpFieldsState.username
      );

      //Redirect to login upon sucsessfull registration
      navigate("/login");
      console.log("Signed UP");
    } catch (signUpError) {
      console.log("Sign Up errrorrrr");
    }
  }

  // FIXME

  return (
    <div className="form form--signup">
      <nav className="login__nav">
        <Link to="/login" className="router__link logo">
          <button className="form__btn">Login</button>
        </Link>
        <span className="form__span">|</span>
        <button className="form__btn btn--active">Sign up</button>
      </nav>
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          onChange={(event) => handleSignUpChange(event)}
          value={signUpFieldsState.username}
          required
          className="textfield"
          variant="standard"
          error={fieldErrors.username}
          helperText={fieldErrors.username && validations.title}
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          onChange={(event) => handleSignUpChange(event)}
          value={signUpFieldsState.email}
          required
          className="textfield"
          variant="standard"
          error={fieldErrors.email}
          helperText={fieldErrors.email && validations.email}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          onChange={(event) => handleSignUpChange(event)}
          value={signUpFieldsState.password}
          required
          className="textfield"
          type="password"
          autoComplete="current-password"
          error={fieldErrors.password} // for more than 5 characters
          helperText={fieldErrors.password && validations.password}
        />

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          onChange={(event) => handleSignUpChange(event)}
          value={signUpFieldsState.confirmPassword}
          required
          className="textfield"
          type="password"
          autoComplete="current-password"
          error={
            signUpFieldsState.confirmPassword !== signUpFieldsState.password &&
            signUpFieldsState.confirmPassword !== ""
          }
          helperText={
            signUpFieldsState.confirmPassword !== signUpFieldsState.password &&
            signUpFieldsState.confirmPassword !== "" &&
            validations.wrongPassword
          }
        />
        <Button
          style={{
            margin: "2rem 0 1rem",
            padding: "0.75rem 0.6rem",
            borderRadius: "0.3rem",
            width: "100%",
            fontSize: "1.2rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
          variant="contained"
          color="primary"
          disabled={pushErrorsInArray()}
          type="submit"
        >
          Sign Up
        </Button>

        <Link to="/" className="router__link logo link__google">
          <button
            className="btn btn--secondary btn__google"
            onClick={handleSignUpWithGoogle}
          >
            Sign up with google
          </button>
        </Link>
      </form>
    </div>
  );
}
