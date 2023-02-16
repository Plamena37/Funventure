import "./FormOverlay.css";
import "../../Variables.css";
import LogIn from "./LogIn";

export default function LogInOverlay() {
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
        <LogIn />
      </div>
    </section>
  );
}
