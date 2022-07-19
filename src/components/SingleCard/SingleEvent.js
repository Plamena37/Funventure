import "./SingleCardHeader.css";
import "./SingleCardInfo.css";
import "./SingleCardLayout.css";

import { Link, useLocation } from "react-router-dom";

import { EventContext } from "../../context/EventsContextProvider";
import { useContext, useState } from "react";

export default function SingleEvent(currentID) {
  const location = useLocation();
  const { allEvents } = useContext(EventContext);

  const [selectedEvent, setSelectedEvent] = useState({
    id: "",
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

  function renderSingleEvents() {
    return allEvents.map((item) => (
      <div key={item.id} className="single__card__layout">
        {/* BUG */}
        {console.log(location.currentID)}

        <header className="single__card__header">
          <i class="fas fa-map-marked-alt single__card__icon"></i>
          <h2 className="single__card__heading">{item.title}</h2>
        </header>
        <ul className="single__card__list">
          <li>
            <i class="fas fa-map-pin card__list__icon"></i>
            <p className="card__list__desc">{item.city}</p>
          </li>
          <li>
            <i class="fas fa-clock card__list__icon"></i>
            <p className="card__list__desc">
              {item.startTime} to {item.endTime}
            </p>
          </li>
          <li>
            <i class="fas fa-calendar-day card__list__icon"></i>
            <p className="card__list__desc">{item.date}</p>
          </li>
          <li>
            <i class="fas fa-users-cog card__list__icon"></i>
            <p className="card__list__desc">{item.team}</p>
          </li>
        </ul>

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
              <h2 className="card__info__heading">{item.title}</h2>
              <p className="card__info__price">
                Ticket Price: <span>${item.price}</span>
              </p>
            </li>
            <li className="card__info__desc">{item.description}</li>
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
        {/* BUG */}
      </div>
    ));
  }
  return (
    <>
      <section className="single__card__layout">
        <div className="all-events__container">
          {/*Displays the saved events*/}
          {allEvents.length > 0 && renderSingleEvents()}
        </div>
      </section>
      {/* <header className="single__card__header">
        <i class="fas fa-map-marked-alt single__card__icon"></i>
        <h2 className="single__card__heading">Powder Festival</h2>

      </header>
      <ul className="single__card__list">
        <li>
          <i class="fas fa-map-pin card__list__icon"></i>
          <p className="card__list__desc">Burgas</p>
        </li>
        <li>
          <i class="fas fa-clock card__list__icon"></i>
          <p className="card__list__desc">From 2 PM to 4 PM</p>
        </li>
        <li>
          <i class="fas fa-calendar-day card__list__icon"></i>
          <p className="card__list__desc">03 Oct 2022</p>
        </li>
        <li>
          <i class="fas fa-users-cog card__list__icon"></i>
          <p className="card__list__desc">Dreamers Org</p>
        </li>
      </ul>

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
      </section> */}
    </>
  );
}
