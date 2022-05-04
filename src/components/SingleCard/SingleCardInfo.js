import "./SingleCardInfo.css";
import { Link } from "react-router-dom";

export default function SingleCardInfo() {
  return (
    <section className="single__card__info">
      <div>
        <img
          className="card__info__img"
          src={require("../../images/cards/event-1.jpg")}
          alt="Event image"
        />
      </div>

      <ul className="card__info__container">
        <li>
          <h2 className="card__info__heading">Powder Festival</h2>
          <p className="card__info__price">
            Ticket Price: <span>$20</span>
          </p>
        </li>
        <li className="card__info__desc">
          Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
          Halvah croissant candy canes bonbon candy. Apple pie jelly beans
          topping carrot cake danish tart cake cheesecake. Muffin danish
          chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes
          oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.
        </li>
        <li>
          <Link to="/purchase">
            <button className="card__info__btn btn__reserve">
              Reserve your seat
            </button>
          </Link>
          <Link to="/events">
            <button className="card__info__btn btn__back">
              Back to All Events
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
