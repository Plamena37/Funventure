import "./Card.css";

export default function Price(props) {
  return (
    <section className="price__section">
      <h3 className="price__title">{props.title}</h3>
      <p className="price__ticket">
        Ticket Price: <span className="price__price"> ${props.price}</span>
      </p>
    </section>
  );
}
