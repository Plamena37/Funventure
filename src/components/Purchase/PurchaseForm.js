import "../AddEvent/AddEventLayout.css";
import "../AddEvent/AddEventForm.css";
import "./PurchaseForm.css";
import PurchaseLayout from "./PurchaseLayout";
import TextField from "@material-ui/core/TextField";
import { validations } from "../validationMessages";
import { Link } from "react-router-dom";

export default function PurchaseForm({
  purchaseData,
  purchaseHandleChange,
  handleSubmit,
}) {
  // Getting current date
  const curDate = new Date();
  const curYear = curDate.getFullYear().toString();
  let curMonth = curDate.getMonth() + 1;

  if (curMonth < 10) {
    curMonth = `0${curMonth}`;
  }
  const curDateFinal = `${curYear}-${curMonth}`;

  return (
    <PurchaseLayout children>
      <div className="add__events__header">
        <i class="fas fa-shopping-cart events__icon"></i>
        <h2 className="form__primary__heading">Purchase Ticket </h2>
      </div>
      <form className="add__event__form">
        {/************************ PURCHASE DESCRIPTION **********************************/}
        <section className="purchase__description">
          <nav className="form__nav">
            <i class="fas fa-info-circle form__icon"></i>
            <h3 className="form__heading">Event Description</h3>
          </nav>
          <div className="purchase__container">
            <div className="form__inputs purchase__inputs">
              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="Event Title"
                defaultValue="Powder Fest"
                variant="outlined"
              />

              <TextField
                disabled
                className="purchase__input"
                id="price"
                name="price"
                value={purchaseData.price}
                label="Single Price"
                variant="outlined"
              />
            </div>
            <div className="form__inputs purchase__inputs">
              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="Category"
                defaultValue="Festival"
                variant="outlined"
              />
              <TextField
                disabled
                className="purchase__input"
                id="outlined-number"
                label="Seats Available"
                defaultValue="200 Seats"
                variant="outlined"
              />
            </div>

            <div className="form__inputs">
              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="Event Organizer"
                defaultValue="Organizer Group"
                variant="outlined"
              />
            </div>
          </div>
        </section>

        {/****************************** PURCHASE DETAILS ******************************* */}
        <section className="purchase__details">
          <nav className="form__nav">
            <i class="fas fa-info-circle form__icon"></i>
            <h3 className="form__heading">Event Details</h3>
          </nav>
          <div className="purchase__container">
            <div className="form__inputs purchase__inputs">
              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="City"
                defaultValue="Burgas"
                variant="outlined"
              />

              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="Date"
                defaultValue="2022-03-21"
                variant="outlined"
                type="date"
              />
            </div>
            <div className="form__inputs purchase__inputs">
              <TextField
                disabled
                className="purchase__input time"
                id="outlined-basic"
                label="Start Time"
                defaultValue="07:30"
                variant="outlined"
                type="time"
              />

              <TextField
                disabled
                className="purchase__input time"
                id="outlined-basic"
                label="End Time"
                defaultValue="12:30"
                variant="outlined"
                type="time"
              />
            </div>
          </div>
        </section>

        {/****************************** PURCHASE TICKETS ******************************* */}
        <section className="purchase__ticket">
          <nav className="form__nav">
            <i class="fas fa-ticket-alt form__icon"></i>
            <h3 className="form__heading">
              Event Info <span>*</span>
            </h3>
          </nav>
          <div className="purchase__container">
            <div className="form__inputs purchase__inputs">
              <TextField
                required
                className="purchase__input"
                id="tickets"
                name="tickets"
                value={purchaseData.tickets}
                label="Number of Tickets"
                variant="outlined"
                type="number"
                onChange={(event) => purchaseHandleChange(event)}
                error={!/(^$)|(^\d{1,2}$)/.test(purchaseData.tickets)}
                helperText={
                  !/(^$)|(^\d{1,2}$)/.test(purchaseData.tickets) &&
                  validations.tickets
                }
              />

              <TextField
                required
                className="purchase__input"
                id="email"
                name="email"
                value={purchaseData.email}
                label="E-mail"
                variant="outlined"
                onChange={(event) => purchaseHandleChange(event)}
                error={
                  !/(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/.test(
                    purchaseData.email
                  )
                }
                helperText={
                  !/(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/.test(
                    purchaseData.email
                  ) && validations.email
                }
              />
            </div>
            <div className="purchase__inputs total__price">
              <h3 className="total__price__heading">Total:</h3>
              <p className="total__price__sum">
                <span>$</span>
                {Number(purchaseData.tickets) * Number(purchaseData.price)}
              </p>
            </div>
          </div>
        </section>

        {/****************************** PURCHASE CARD ******************************* */}
        <section className="purchase__card">
          <nav className="form__nav">
            <i class="fas fa-credit-card  form__icon"></i>
            <h3 className="form__heading">
              Credit Card Info <span>*</span>
            </h3>
          </nav>
          <div className="purchase__container credit__card">
            <div className="form__inputs purchase__inputs">
              <TextField
                required
                className="purchase__input"
                id="firstName"
                name="firstName"
                value={purchaseData.firstName}
                label="First Name"
                variant="outlined"
                onChange={(event) => purchaseHandleChange(event)}
                error={!/(^$)|(^[a-zA-Z]+$)/.test(purchaseData.firstName)} // will be true if the string contains numbers
                helperText={
                  !/(^$)|(^[a-zA-Z]+$)/.test(purchaseData.firstName) &&
                  validations.lettersOnly
                }
              />

              <TextField
                required
                className="purchase__input"
                id="lastName"
                name="lastName"
                value={purchaseData.lastName}
                label="Last Name"
                variant="outlined"
                onChange={(event) => purchaseHandleChange(event)}
                error={!/(^$)|(^[a-zA-Z]+$)/.test(purchaseData.lastName)} // will be true if the string contains numbers
                helperText={
                  !/(^$)|(^[a-zA-Z]+$)/.test(purchaseData.lastName) &&
                  validations.lettersOnly
                }
              />
            </div>
            <div className="form__inputs purchase__inputs">
              <TextField
                required
                className="purchase__input"
                id="cardNumber"
                name="cardNumber"
                value={purchaseData.cardNumber}
                label="Card Number"
                variant="outlined"
                onChange={(event) => purchaseHandleChange(event)}
                error={
                  purchaseData.cardNumber.length !== 16 &&
                  purchaseData.cardNumber !== ""
                }
                helperText={
                  purchaseData.cardNumber.length !== 16 &&
                  purchaseData.cardNumber !== "" &&
                  validations.cardNumber
                }
              />
            </div>
            <div className="form__inputs purchase__inputs">
              <TextField
                required
                className="purchase__input"
                InputLabelProps={{ shrink: true }}
                id="cardMonth"
                name="cardMonth"
                value={purchaseData.cardMonth}
                label="MM/YY"
                variant="outlined"
                type="month"
                InputProps={{
                  inputProps: { min: curDateFinal },
                }}
                onChange={(event) => purchaseHandleChange(event)}
                error={
                  purchaseData.cardMonth < curDateFinal &&
                  purchaseData.cardMonth !== ""
                }
                helperText={
                  purchaseData.cardMonth < curDateFinal &&
                  purchaseData.cardMonth !== "" &&
                  validations.cardMonth
                }
              />

              <TextField
                required
                className="purchase__input"
                id="cardCvv"
                name="cardCvv"
                value={purchaseData.cardCvv}
                label="CVV"
                variant="outlined"
                type="number"
                onChange={(event) => purchaseHandleChange(event)}
                error={!/(^$)|(^\d{3}$)/.test(purchaseData.cardCvv)}
                helperText={
                  !/(^$)|(^\d{3}$)/.test(purchaseData.cardCvv) &&
                  validations.cardCvv
                }
              />
            </div>
          </div>
        </section>

        {/****************************** PURCHASE BTN ******************************* */}
        <div className="btn__wrapper">
          {/* <Link to="/final-preview" className="purchase__link"> */}
          <button
            className="event__form__btn"
            // disabled={globalErrorState}
            onClick={(e) => handleSubmit(e)}
          >
            Final Preview
          </button>
          {/* </Link> */}
        </div>
      </form>
    </PurchaseLayout>
  );
}
