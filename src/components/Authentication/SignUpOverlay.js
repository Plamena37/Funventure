import "./FormOverlay.css";
import "../../Variables.css";
import SignUp from "./SignUp";

export default function SignUpOverlay() {
  return (
    <section className="overlay__section">
      <div className="overlay">
        <div className="overlay__image__wrapper">
          <img
            className="overlay__img"
            alt="Hot air baloon"
            src={require("../../images/login/login.jpg")}
          />
        </div>
        <SignUp />
      </div>
    </section>
  );
}
