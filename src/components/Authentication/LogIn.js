import { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { validations } from "../validationMessages";
import "./AuthForm.css";
import "../../Variables.css";
import { EventContext } from "../../context/EventsContextProvider";
import { API_KEY } from "../../API_KEY";
import LoadingSpinner from "../Layout/LoadingSpinner";
import { useSnackbar } from "notistack";

export default function LogInForm() {
  const navigate = useNavigate();
  const eventCtx = useContext(EventContext);
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

  const [logInFieldsState, setLogInFieldsState] = useState({
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
  });

  const validationConditions = {
    email: /(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/,
    password: /(^$)|(^.{6,}$)/,
  };

  const handleValidation = (fieldName, fieldValue) => {
    if (fieldName !== "confirmPassword") {
      setFieldErrors({
        ...fieldErrors,
        [fieldName]: !validationConditions[fieldName].test(fieldValue),
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    //Set the state
    setLogInFieldsState({
      ...logInFieldsState,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let checkForErrors = pushErrorsInArray();

    setIsLoading(true);
    if (!checkForErrors) {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: logInFieldsState.email,
            password: logInFieldsState.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              const errorMessage =
                data?.error?.message || "Authentication failed!";

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );

          eventCtx.login(data.idToken, expirationTime.toISOString());

          eventCtx.setNewUsername(data.displayName);
          eventCtx.setNewProfileImage(data.profilePicture);

          console.log(data);
          navigate("/");
        })
        .catch((err) => {
          switch (err.message) {
            case "EMAIL_NOT_FOUND":
              enqueueSnackbar("Entered email is not found! 💥", {
                preventDuplicate: true,
                variant: "error",
              });
              break;
            case "INVALID_PASSWORD":
              enqueueSnackbar("Entered invalid password! 💥", {
                preventDuplicate: true,
                variant: "error",
              });
              break;
            case "USER_DISABLED":
              enqueueSnackbar("User is disabled! 💥", {
                preventDuplicate: true,
                variant: "error",
              });
              break;
            default:
              enqueueSnackbar("Something went wrong! 💣", {
                preventDuplicate: true,
                variant: "error",
              });
          }
          return;
        });
    }
  };

  return (
    <div className="form form--signup">
      <nav className="login__nav">
        <button className="form__btn btn--active">Login</button>
        <span className="form__span">|</span>
        <Link to="/signup" className="router__link logo">
          <button className="form__btn ">Sign up</button>
        </Link>
      </nav>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            onChange={handleChange}
            value={logInFieldsState.email}
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
            onChange={handleChange}
            value={logInFieldsState.password}
            required
            className="textfield"
            type="password"
            variant="standard"
            autoComplete="current-password"
            error={fieldErrors.password} // for more than 5 characters
            helperText={fieldErrors.password && validations.password}
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

          {/* <button className="btn btn--secondary">Sign in with google</button> */}
        </form>
      )}
    </div>
  );
}
