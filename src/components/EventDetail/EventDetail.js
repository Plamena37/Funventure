import "./EventDetail.css";
import "../../index.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../../context/EventsContextProvider";
import { useContext, useEffect } from "react";

export default function EventDetail(currentID) {
  const { eventId } = useParams();

  const navigate = useNavigate();

  const eventCtx = useContext(EventContext);
  const isLoading = eventCtx.isLoading;
  const error = eventCtx.error;
  let eventDetail;

  useEffect(() => {
    eventCtx.getAllEvents();
  }, []);

  const allEvents = eventCtx.allEvents;

  const getEventDetail = (eventId) => {
    eventDetail = allEvents.find((item) => item.id === eventId);
  };
  getEventDetail(eventId);

  const onClickHandler = () => {
    navigate("/purchase", { state: { eventDetail } });
  };

  let content = (
    <div key={eventDetail.id} className="single__card__layout">
      <header className="section__header">
        <i class="fas fa-map-marked-alt section__icon"></i>
        <h2 className="section__primary__heading">{eventDetail.title}</h2>
      </header>
      <ul className="single__card__list">
        <li>
          <i class="fas fa-map-pin section__list__icon"></i>
          <p className="card__list__desc">{eventDetail.city}</p>
        </li>
        <li>
          <i class="fas fa-clock section__list__icon"></i>
          <p className="card__list__desc">{eventDetail.startTime}</p>
        </li>
        <li>
          <i class="fas fa-calendar-day section__list__icon"></i>
          <p className="card__list__desc">{eventDetail.date}</p>
        </li>
        <li>
          <i class="fas fa-users-cog section__list__icon"></i>
          <p className="card__list__desc">{eventDetail.team}</p>
        </li>
      </ul>

      <section className="single__card__info">
        <div>
          <img
            className="card__info__img"
            src={eventDetail.image}
            alt={eventDetail.title}
          />
        </div>

        <ul className="card__info__container">
          <li>
            <h2 className="card__info__heading">{eventDetail.title}</h2>

            <p className="card__info__price">
              Ticket Price: <span>${eventDetail.price}</span>
            </p>
          </li>
          <li>
            <p className="card__info__seats">
              {eventDetail.seats} seats available
            </p>
          </li>
          <li className="card__info__desc">{eventDetail.description}</li>
          <li>
            <button
              to="/purchase"
              className="info__btn btn__reserve"
              onClick={onClickHandler}
            >
              Reserve your seat
            </button>
            <Link to="/events" className="info__btn btn__back">
              Back to All Events
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
  return (
    <>
      {isLoading && <p>Loading post...</p>}
      {error && <p>{error.message}</p>}
      {!error && eventDetail && content}
    </>
  );
}
