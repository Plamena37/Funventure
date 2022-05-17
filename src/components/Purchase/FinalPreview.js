import "./Preview.css";
import "../AddEvent/AddEventLayout.css";
import { Link } from "react-router-dom";
import PurchaseLayout from "./PurchaseLayout";
import { useLocation } from "react-router-dom";

export default function FinalPreview() {
  // const { state } = useLocation();
  // console.log({ state });
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
            Title:<span> Powder Fest</span>
          </li>
          <li>
            City: <span>Burgas</span>
          </li>
          <li>
            Date: <span>03 Oct 2022</span>
          </li>
          <li>
            Time: <span>2 PM to 4 PM</span>
          </li>
          <li>
            Category: <span>Festival</span>
          </li>
          <li>
            Price:<span> $20</span>
          </li>
          <li>
            Organization: <span>Dreamers Org</span>
          </li>
        </ul>
        <ul className="preview__list">
          <li className="preview__list__heading"> User Information</li>
          <li>
            {/* <p>{purchaseData.firstName}</p> */}
            First Name: <span>Plamena</span>
            {/* First Name: <span>{location.purchaseData.firstName}</span> */}
          </li>
          <li>
            {/* Last Name: <span>{purchaseData.lastName}</span> */} Last Name:{" "}
            <span>Ivanova</span>
          </li>

          <li>
            {/* Ticket Count: <span>{purchaseData.tickets}</span> */}Ticket
            Count: <span>3</span>
          </li>

          <li>
            {/* Email: <span>{purchaseData.email}</span> */}Email:{" "}
            <span>yomena37@gmail.com</span>
          </li>

          <li>
            {/* Card Number: <span>{purchaseData.cardNumber}</span> */} Card
            Number: <span>3333333333333333</span>
          </li>

          <li>
            {/* Valid until: <span>{purchaseData.cardMonth}</span> */}Valid
            until: <span>Oct, 2027</span>
          </li>
          <li>
            {/* CVV: <span>{purchaseData.cardCvv}</span> */} CVV:{" "}
            <span>333</span>
          </li>
          <li>
            Total Price:{" "}
            <span>
              $60
              {/* ${Number(purchaseData.tickets) * Number(purchaseData.price)} */}
            </span>
          </li>
        </ul>
      </div>
      <div className="btn__wrapper">
        <Link to="/purchase" className="purchase__link">
          <button className="event__form__btn">Edit</button>
        </Link>
        <Link to="/purchase-success" className="purchase__link">
          <button className="event__form__btn">Purchase</button>
        </Link>
      </div>
    </PurchaseLayout>
  );
}
