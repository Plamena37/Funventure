import "./LogInForm.css";
import "../../Colors.css";
import { TextField, Button } from "@material-ui/core";
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
  error,
  pushErrorsInArray,
}) {
  return (
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
        error={error.username}
        helperText={error.username && validations.title}
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
        error={error.email}
        helperText={error.email && validations.email}
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
        error={error.password} // for more than 5 characters
        helperText={error.password && validations.password}
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
          onClick={signInWithGoogle}
        >
          Sign up with google
        </button>
      </Link>
      {/* <h4>{localStorage.getItem("name")}</h4>
      <h4>{localStorage.getItem("email")}</h4>
      <img src={localStorage.getItem("profilePic")} className="google__img" /> */}
    </form>
  );
}
