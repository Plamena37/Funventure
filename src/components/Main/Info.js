import "./Info.css";
import "../../Colors.css";
import {
  CalendarIcon,
  ThumbUpIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

export default function Info() {
  return (
    <section className="info__section">
      <ul className="info wrapper">
        <li>
          <CalendarIcon className="info__icon" />
          <p className="info__num">50+</p>
          <p className="info__desc">Events</p>
        </li>
        <li>
          <ThumbUpIcon className="info__icon" />
          <p className="info__num">100+</p>
          <p className="info__desc">Likes</p>
        </li>
        <li>
          <UserGroupIcon className="info__icon" />
          <p className="info__num">300+</p>
          <p className="info__desc">Adventurers</p>
        </li>
        <li>
          <LocationMarkerIcon className="info__icon" />
          <p className="info__num">6+</p>
          <p className="info__desc">Cities</p>
        </li>
      </ul>
    </section>
  );
}
