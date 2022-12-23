import classes from "./Modal.module.css";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../../context/EventsContextProvider";

export default function Modal() {
  const newPasswordRef = useRef();
  const navigate = useNavigate();
  const eventCtx = useContext(EventContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBNk5xmO5tyndMnTz16Nnr2qrpHDEg6o2E",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: eventCtx.token,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        switch (err.message) {
          case "INVALID_ID_TOKEN":
            alert("User's credentials are no longer valid! 💥");
            break;
          case "WEAK_PASSWORD":
            alert("Password must be 6 characters long or more! 💥");
            break;
          default:
            alert("Something went wrong! 💣");
        }
        return;
      });
  };

  return (
    <section className={classes.backdrop}>
      <form className={classes.modal} onSubmit={submitHandler}>
        <label htmlFor="new-password" className={classes.label}>
          New password:
        </label>
        <input
          className={classes.input}
          type="password"
          id="new-password"
          ref={newPasswordRef}
          minLength="6"
          required
        />

        <button className={classes.btn__modal}>Change Password</button>
      </form>
    </section>
  );
}
