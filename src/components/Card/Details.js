import "./Card.css";
import {
  LocationMarkerIcon,
  CalendarIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/solid";

export default function Details({ city, date, timeFrom, timeTo, category }) {
  return (
    <section className="details__section">
      <div className="details">
        <div className="details__title">
          <LocationMarkerIcon className="details__icon" />{" "}
          <p className="details__desc">City</p>
        </div>
        <p className="details__data">{city}</p>
      </div>

      <div className="details">
        <div className="details__title">
          <CalendarIcon className="details__icon" />{" "}
          <p className="details__desc">Date</p>
        </div>
        <p className="details__data">{date}</p>
      </div>

      <div className="details">
        <div className="details__title">
          <ClockIcon className="details__icon" />{" "}
          <p className="details__desc">Time</p>
        </div>
        <p className="details__data">
          {timeFrom} to {timeTo}
        </p>
      </div>

      <div className="details">
        <div className="details__title">
          <SparklesIcon className="details__icon" />{" "}
          <p className="details__desc">Category</p>
        </div>
        <p className="details__data">{category}</p>
      </div>
    </section>
  );
}
