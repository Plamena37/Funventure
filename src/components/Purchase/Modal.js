import "./Modal.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

export default function Modal(props) {
  return (
    <section className="backdrop">
      <Confetti />
      <div className="modal">
        <h3 className="modal__heading">Congratulations!🎉</h3>
        <p className="modal__text">You successfully purchased your ticket.</p>
        <Link to="/" className="router__modal">
          <button className="btn__modal">Back to Home</button>
        </Link>
      </div>
    </section>
  );
}
