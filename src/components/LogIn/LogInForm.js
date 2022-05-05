import "./LogInForm.css";
import "../../Colors.css";
import { TextField, Button } from "@material-ui/core";
import { validations } from "../validationMessages";

export default function LogInForm({
  logInFieldsState,
  handleLogInChange,
  handleSubmit,
  handleLogIn,
  error,
  pushErrorsInArray,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="email"
        name="email"
        label="Email"
        onChange={handleLogInChange}
        value={logInFieldsState.email}
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
        onChange={handleLogInChange}
        value={logInFieldsState.password}
        required
        className="textfield"
        type="password"
        autoComplete="current-password"
        error={error.password} // for more than 5 characters
        helperText={error.password && validations.password}
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
        Log in
      </Button>

      <button className="btn btn--secondary">Sign in with google</button>
    </form>
  );
}
