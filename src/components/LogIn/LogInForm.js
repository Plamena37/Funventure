import "./LogInForm.css";
import "../../Colors.css";
import TextField from "@material-ui/core/TextField";
import { validations } from "../validationMessages";

export default function LogInForm({
  logInFieldsState,
  handleLogInChange,
  handleSubmit,
  handleLogIn,
}) {
  return (
    <>
      <TextField
        id="email"
        name="email"
        label="Email"
        onChange={handleLogInChange}
        value={logInFieldsState.email}
        required
        className="textfield"
        variant="standard"
        error={
          !/(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/.test(
            logInFieldsState.email
          )
        }
        helperText={
          !/(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/.test(
            logInFieldsState.email
          ) && validations.email
        }
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        onChange={handleLogInChange}
        value={logInFieldsState.password}
        required
        className="textfield"
        type="password"
        autoComplete="current-password"
        error={!/(^$)|(^.{5,}$)/.test(logInFieldsState.password)} // for more than 5 characters
        helperText={
          !/(^$)|(^.{5,}$)/.test(logInFieldsState.password) &&
          validations.password
        }
      />

      <button
        className="btn btn--primary"
        // onClick={handleSubmit}
        onClick={handleLogIn}
      >
        Log in
      </button>
      <button className="btn btn--secondary">Sign in with google</button>
    </>
  );
}
