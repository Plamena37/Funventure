import "./FormOverlay.css";
import "../../Variables.css";
import LogIn from "./LogIn";

export default function LogInOverlay() {
  return (
    <section className="overlay__section">
      <div className="overlay">
        <img
          className="overlay__img"
          alt="Hot air baloon"
          src={require("../../images/login/login.jpg")}
        />
        <LogIn />
      </div>
    </section>
  );
}
