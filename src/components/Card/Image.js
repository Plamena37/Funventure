import "./Card.css";

export default function Image(props) {
  return (
    <section className="image__section">
      <img
        className="card__img"
        src={require("../../images/cards/event-1.jpg")}
      />
      <button className="card__btn btn--seat">{props.seats} Seats</button>
    </section>
  );
}
