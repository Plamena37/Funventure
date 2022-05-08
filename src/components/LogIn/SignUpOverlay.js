import "./FormOverlay.css";
import "../../Colors.css";
import SignUp from "./SignUp";

export default function SignUpOverlay() {
  return (
    <section className="overlay__section">
      <div className="overlay">
        <img
          className="overlay__img"
          alt="Hot air baloon"
          src={require("../../images/login/login.jpg")}
        />
        <SignUp />
      </div>
    </section>
  );
}
