import "./Preview.css";
import "../AddEvent/AddEventLayout.css";
import { Link, useNavigate } from "react-router-dom";
import PurchaseLayout from "./PurchaseLayout";
import { useLocation } from "react-router-dom";

export default function FinalPreview({ purchaseData, savedEventInfo }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <PurchaseLayout children>
      <div className="add__events__header">
        <i class="fas fa-search events__icon"></i>
        <h2 className="form__primary__heading">Final Preview </h2>
      </div>
      <div className="preview__wrapper">
        <ul className="preview__list">
          <li className="preview__list__heading">Event Information:</li>
          <li>
            Title:{" "}
            <span className="purchase-data-highlight">
              {location.state?.title}
            </span>
          </li>
          <li>
            City:{" "}
            <span className="purchase-data-highlight">
              {location.state?.city}
            </span>
          </li>
          <li>
            Date:{" "}
            <span className="purchase-data-highlight">
              {location.state?.date}
            </span>
          </li>
          <li>
            Time:{" "}
            <span className="purchase-data-highlight">
              {location.state?.startTime} to {location.state?.endTime}
            </span>
          </li>
          <li>
            Category:{" "}
            <span className="purchase-data-highlight">
              {location.state?.category}
            </span>{" "}
          </li>
          <li>
            Single Ticket Price:{" "}
            <span className="purchase-data-highlight">
              ${location.state?.price}
            </span>
          </li>
          <li>
            Organization:{" "}
            <span className="purchase-data-highlight">
              {location.state?.team}
            </span>
          </li>
        </ul>
        <ul className="preview__list">
          <li className="preview__list__heading">User Information</li>
          <li>
            First Name:{" "}
            <span className="purchase-data-highlight">
              {location.state?.firstName}
            </span>{" "}
          </li>
          <li>
            Last Name:{" "}
            <span className="purchase-data-highlight">
              {location.state?.lastName}
            </span>
          </li>
          <li>
            Ticket Count:{" "}
            <span className="purchase-data-highlight">
              {location.state?.tickets}
            </span>
          </li>
          <li>
            Email:{" "}
            <span className="purchase-data-highlight">
              {location.state?.email}
            </span>
          </li>{" "}
          <li>
            Card Number:{" "}
            <span className="purchase-data-highlight">
              {location.state?.cardNumber}
            </span>
          </li>{" "}
          <li>
            Valid until:{" "}
            <span className="purchase-data-highlight">
              {location.state?.cardMonth}
            </span>
          </li>{" "}
          <li>
            CVV:{" "}
            <span className="purchase-data-highlight">
              {location.state?.cardCvv}
            </span>
          </li>
          <li>
            Total Price:{" "}
            <span className="purchase-data-highlight">
              ${Number(location.state?.tickets) * Number(location.state?.price)}
            </span>
          </li>
        </ul>
      </div>
      <div className="btn__wrapper">
        <button className="event__form__btn" onClick={() => navigate(-1)}>
          Edit
        </button>

        <Link to="/purchase-success" className="purchase__link">
          <button className="event__form__btn">Purchase</button>
        </Link>
      </div>
    </PurchaseLayout>
  );
}
