import "./LogInForm.css";
import "../../Colors.css";
import TextField from "@material-ui/core/TextField";
import { validations } from "../validationMessages";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../firebase";
import { Link } from "react-router-dom";

export default function SignUpForm({
  signUpFieldsState,
  handleSignUpChange,
  handleSubmit,
  handleRegister,
  signInWithGoogle,
}) {
  return (
    <>
      <TextField
        id="username"
        name="username"
        label="Username"
        onChange={handleSignUpChange}
        value={signUpFieldsState.username}
        required
        className="textfield"
        variant="standard"
        error={!/(^$)|(^[A-Za-z0-9]+$)/.test(signUpFieldsState.username)}
        helperText={
          !/(^$)|(^[A-Za-z0-9]+$)/.test(signUpFieldsState.username) &&
          validations.title
        }
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        onChange={handleSignUpChange}
        value={signUpFieldsState.email}
        required
        className="textfield"
        variant="standard"
        error={
          !/(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/.test(
            signUpFieldsState.email
          )
        }
        helperText={
          !/(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/.test(
            signUpFieldsState.email
          ) && validations.email
        }
      />

      <TextField
        id="password"
        name="password"
        label="Password"
        onChange={handleSignUpChange}
        value={signUpFieldsState.password}
        required
        className="textfield"
        type="password"
        autoComplete="current-password"
        error={!/(^$)|(^.{5,}$)/.test(signUpFieldsState.password)} // for more than 5 characters
        helperText={
          !/(^$)|(^.{5,}$)/.test(signUpFieldsState.password) &&
          validations.password
        }
      />

      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm password"
        onChange={handleSignUpChange}
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
      <button
        className="btn btn--primary"
        // onClick={handleSubmit}
        onClick={handleRegister}
      >
        Sign Up
      </button>
      <Link to="/" className="router__link logo link__google">
        <button
          className="btn btn--secondary btn__google"
          onClick={signInWithGoogle}
        >
          Sign up with google
        </button>
      </Link>
      {/* <h4>{localStorage.getItem("name")}</h4>
      <h4>{localStorage.getItem("email")}</h4>
      <img src={localStorage.getItem("profilePic")} className="google__img" /> */}
    </>
  );
}
