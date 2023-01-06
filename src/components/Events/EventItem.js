import {
  LocationMarkerIcon,
  CalendarIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./EventItem.css";
import FavoritesContext from "../../context/FavoritesContext";
import { useSnackbar } from "notistack";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function EventItem(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
      enqueueSnackbar("Removed from Favorites!", {
        preventDuplicate: true,
        variant: "error",
      });
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        price: props.price,
        city: props.city,
        date: props.date,
        startTime: props.startTime,
        endTime: props.endTime,
        category: props.category,
        seats: props.seats,
        team: props.team,
        image: props.image,
      });
      enqueueSnackbar("Added to Favorites!", {
        preventDuplicate: true,
        variant: "success",
      });
    }
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
          <button className="card__btn btn--seat">{props.seats} Seats</button>
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
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              style={{
                color: "#4c45b3",
              }}
              checked={itemIsFavorite}
              onClick={toggleFavoriteStatusHandler}
            />
            {itemIsFavorite ? "Dislike" : "Like"}
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

        {/* <Link
          to={`/events`}
          className="event__item__btn btn--delete"
          // BUG DELETE HANDLER
          // onClick={() => handleDelete(item)}
        >
          Delete
        </Link> */}
      </section>
    </li>
  );
}
