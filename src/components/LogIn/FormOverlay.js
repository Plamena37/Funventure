import "./FormOverlay.css";
import "../../Colors.css";
import Form from "./Form";

export default function FormOverlay() {
  return (
    <section className="overlay__section">
      <div className="overlay">
        <img
          className="overlay__img"
          alt="Hot air baloon"
          src={require("../../images/login/login.jpg")}
        />
        <Form />
      </div>
    </section>
  );
}
