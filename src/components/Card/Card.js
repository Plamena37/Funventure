import "./Card.css";
import "../../Variables.css";

import { Link, useNavigate } from "react-router-dom";

import { EventContext } from "../../context/EventsContextProvider";
import { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";

export default function Card() {
  const navigate = useNavigate();

  const { allEvents, deleteEvent } = useContext(EventContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [selectedEvent, setSelectedEvent] = useState({
    // id: "",
    title: "",
    description: "",
    price: 0,
    city: "",
    date: "",
    startTime: "",
    endTime: "",
    category: "",
    seats: 0,
    // image: "",
    team: "",
  });
  const [popUpActive, setPopUpActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleDelete(item) {
    const action = (key) => (
      <>
        <Button
          color="secondary"
          size="medium"
          onClick={() => {
            deleteEvent(item);
            closeSnackbar(key);
          }}
        >
          YES
        </Button>
        <Button
          color="secondary"
          size="medium"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          NO
        </Button>
      </>
    );

    enqueueSnackbar("Proceed to delete ?", {
      variant: "warning",
      preventDuplicate: true,
      persist: true,
      action,
    });
  }

  function clearPopUpActive() {
    setPopUpActive(false);
  }

  function handleViewEvent(item) {
    setPopUpActive(!popUpActive);
    setSelectedEvent({
      ...item,
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      city: item.city,
      date: item.date,
      startTime: item.startTime,
      endTime: item.endTime,
      category: item.category,
      seats: item.seats,
      team: item.team,
    });

    let currentID = item.id;
    console.log(currentID);

    // navigate("/event", { state: { ...selectedEvent } });
    navigate("/event", {
      currentID: currentID,
    });
  }

  function renderAllEvents() {
    let filteredAllEvents = allEvents;

    filteredAllEvents = allEvents.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredAllEvents.map((item) => (
      <div key={item.id} className="card">
        {/* <Price price={item.price} title={item.title} />
        <Link to="/event">
          <Image seats={item.seats} />
        </Link>
        <Details
          city={item.city}
          date={item.date}
          timeFrom={item.startTime}
          timeTo={item.endTime}
          category={item.category}
        />
        <Going going="30" maybe="20" cant="15" />
        <Likes like="137" /> */}

        <section className="btn__wrapper">
          <button
            className="btn btn--view"
            onClick={() => handleViewEvent(item)}
          >
            View
          </button>

          <button
            className="btn btn--delete"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </section>
      </div>
    ));
  }

  const noEventMessage = (
    <div className="message__container">
      <span>Sorry you haven't created any events yet. 😞</span>
      <Link to="/add-event" className="message_link">
        Create an event here.
      </Link>
    </div>
  );

  return (
    <section className="card__layout">
      <div className="filter-and-delete-container">
        {allEvents.length !== 0 && (
          <>
            <input
              type="text"
              placeholder="Search.."
              className="search__bar"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </>
        )}
      </div>

      <div className="all-events__container">
        {/*Displays the saved events*/}
        {allEvents.length === 0 ? noEventMessage : renderAllEvents()}
      </div>
    </section>
  );
}
