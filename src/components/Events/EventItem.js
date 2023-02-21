import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./EventItem.css";
import FavoritesContext from "../../context/FavoritesContext";
import { useSnackbar } from "notistack";

import RoomIcon from "@mui/icons-material/Room";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";
import { EventContext } from "../../context/EventsContextProvider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function EventItem(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const eventCtx = useContext(EventContext);

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite && eventCtx.isLoggedIn) {
      favoritesCtx.removeFavorite(props.id);
      enqueueSnackbar("Removed from Favorites!", {
        preventDuplicate: true,
        variant: "error",
      });
    } else if (!itemIsFavorite && eventCtx.isLoggedIn) {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        price: props.price,
        city: props.city,
        date: props.date,
        startTime: props.startTime,
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

    if (!itemIsFavorite && !eventCtx.isLoggedIn) {
      enqueueSnackbar("You are not logged in!", {
        preventDuplicate: true,
        variant: "error",
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
            <RoomIcon
              className="details__icon"
              style={{ fontSize: "1.4rem" }}
            />
            <p className="details__desc">City</p>
          </div>
          <p className="details__data">{props.city}</p>
        </div>

        <div className="details">
          <div className="details__title">
            <CalendarMonthIcon
              className="details__icon"
              style={{ fontSize: "1.4rem" }}
            />
            <p className="details__desc">Date</p>
          </div>
          <p className="details__data">{props.date}</p>
        </div>

        <div className="details">
          <div className="details__title">
            <AccessTimeIcon
              className="details__icon"
              style={{ fontSize: "1.4rem" }}
            />
            <p className="details__desc">Time</p>
          </div>
          <p className="details__data">{props.startTime}</p>
        </div>

        <div className="details">
          <div className="details__title">
            <CategoryIcon
              className="details__icon"
              style={{ fontSize: "1.4rem" }}
            />
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
