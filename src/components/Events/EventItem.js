import { useContext } from "react";
import {
  LocationMarkerIcon,
  CalendarIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/solid";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./EventItem.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function EventItem(props) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  function addToFavorites() {
    setLiked((like) => !like);
    console.log(liked);
  }

  let eventDetail = props;
  const onClickHandler = () => {
    navigate("/purchase", { state: { eventDetail } });
  };

  return (
    <li className="card" key={props.id}>
      {/*------------------ PRICE ------------------*/}
      <section className="price__section">
        <h3 className="price__title">{props.title}</h3>
        <p className="price__ticket">
          Ticket Price:{" "}
          <span className="price__price">{` $${props.price}`}</span>
        </p>
      </section>
      {/*------------------ IMAGE ------------------*/}
      <Link to={`/events/${props.id}`}>
        <section className="image__section">
          <img className="card__img" src={props.image} alt={props.title} />
          {/* <button className="card__btn btn--seat">{props.seats} Seats</button> */}
        </section>
      </Link>

      {/*------------------ DETAILS ------------------*/}
      <section className="details__section">
        <div className="details">
          <div className="details__title">
            <LocationMarkerIcon className="details__icon" />{" "}
            <p className="details__desc">City</p>
          </div>
          <p className="details__data">{props.city}</p>
        </div>

        <div className="details">
          <div className="details__title">
            <CalendarIcon className="details__icon" />{" "}
            <p className="details__desc">Date</p>
          </div>
          <p className="details__data">{props.date}</p>
        </div>

        <div className="details">
          <div className="details__title">
            <ClockIcon className="details__icon" />{" "}
            <p className="details__desc">Time</p>
          </div>
          <p className="details__data">
            {props.startTime} to {props.endTime}
          </p>
        </div>

        <div className="details">
          <div className="details__title">
            <SparklesIcon className="details__icon" />{" "}
            <p className="details__desc">Category</p>
          </div>
          <p className="details__data">{props.category}</p>
        </div>
      </section>

      {/*------------------ LIKES ------------------*/}
      <section className="likes__section">
        <div className="likes">
          <p className="likes__text">
            {/* {" "}
            <HeartIcon
              style={styles}
              className="likes__icon"
              onClick={like}
            />{" "} */}
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              style={{
                color: "#4c45b3",
              }}
              checked={liked}
              onClick={() => addToFavorites}
            />
            Like
          </p>
        </div>

        <button className="btn  btn__purchase" onClick={onClickHandler}>
          Buy Ticket
        </button>
      </section>

      {/*------------------ BUTTONS ------------------*/}
      <section className="event__item__btn__wrapper">
        <Link to={`/events/${props.id}`} className="event__item__btn btn--view">
          View
        </Link>

        <Link
          to={`/events`}
          className="event__item__btn btn--delete"
          // BUG DELETE HANDLER
          // onClick={() => handleDelete(item)}
        >
          Delete
        </Link>
      </section>
    </li>
  );
}
