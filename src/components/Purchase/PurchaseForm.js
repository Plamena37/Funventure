import "../AddEvent/AddEventLayout.css";
import "../AddEvent/AddEventForm.css";
import "./PurchaseForm.css";
import PurchaseLayout from "./PurchaseLayout";
import { TextField, Button } from "@mui/material";
import { validations } from "../validationMessages";
import SearchIcon from "@mui/icons-material/Search";

export default function PurchaseForm({
  savedEventInfo,
  purchaseData,
  purchaseHandleChange,
  handleSubmit,
  error,
  pushErrorsInArray,
}) {
  // Getting current date
  const currrentDate = new Date();
  const currentYear = currrentDate.getFullYear().toString();
  let currrentMonth = currrentDate.getMonth() + 1;

  if (currrentMonth < 10) {
    currrentMonth = `0${currrentMonth}`;
  }
  const currentDateFinal = `${currentYear}-${currrentMonth}`;

  return (
    <PurchaseLayout children>
      <div className="add__events__header">
        <i class="fas fa-shopping-cart events__icon"></i>
        <h2 className="form__primary__heading">Purchase Ticket </h2>
      </div>
      <div className="add__event__form">
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
                value={savedEventInfo.title}
                variant="outlined"
              />

              <TextField
                disabled
                className="purchase__input"
                id="price"
                name="price"
                value={`${savedEventInfo.price}$`}
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
                value={savedEventInfo.category}
                variant="outlined"
              />
              <TextField
                disabled
                className="purchase__input"
                id="outlined-number"
                label="Seats Available"
                value={`${savedEventInfo.seats} Seats`}
                variant="outlined"
              />
            </div>

            <div className="form__inputs">
              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="Event Organizer"
                value={savedEventInfo.team}
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
                value={savedEventInfo.city}
                variant="outlined"
              />

              <TextField
                disabled
                className="purchase__input"
                id="outlined-basic"
                label="Date"
                value={savedEventInfo.date}
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
                value={savedEventInfo.startTime}
                variant="outlined"
                type="time"
              />

              <TextField
                disabled
                className="purchase__input time"
                id="outlined-basic"
                label="End Time"
                value={savedEventInfo.endTime}
                variant="outlined"
                type="time"
              />
            </div>
          </div>
        </section>

        {/****************************** PURCHASE TICKETS ******************************* */}
        <form className="purchase__tickets__form" onSubmit={handleSubmit}>
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
                  error={error.tickets}
                  helperText={error.tickets && validations.tickets}
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
                  error={error.email}
                  helperText={error.email && validations.email}
                />
              </div>
              <div className="purchase__inputs total__price">
                <h3 className="total__price__heading">Total:</h3>
                <p className="total__price__sum">
                  <span>$</span>
                  {Number(purchaseData.tickets) * Number(savedEventInfo.price)}
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
                  error={error.firstName} // will be true if the string contains numbers
                  helperText={error.firstName && validations.lettersOnly}
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
                  error={error.lastName} // will be true if the string contains numbers
                  helperText={error.lastName && validations.lettersOnly}
                />
              </div>
              <div className="form__inputs purchase__inputs">
                <TextField
                  required
                  className="purchase__input"
                  id="cardNumber"
                  name="cardNumber"
                  value={purchaseData.cardNumber}
                  label={`Card Number (${purchaseData.cardNumber.length} / 16)`}
                  variant="outlined"
                  onChange={(event) => purchaseHandleChange(event)}
                  error={error.cardNumber}
                  helperText={error.cardNumber && validations.cardNumber}
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
                    inputProps: { min: currentDateFinal },
                  }}
                  onChange={(event) => purchaseHandleChange(event)}
                  error={
                    purchaseData.cardMonth < currentDateFinal &&
                    purchaseData.cardMonth !== ""
                  }
                  helperText={
                    purchaseData.cardMonth < currentDateFinal &&
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
                  error={error.cardCvv}
                  helperText={error.cardCvv && validations.cardCvv}
                />
              </div>
            </div>
          </section>

          {/****************************** PURCHASE BTN ******************************* */}
          <Button
            style={{
              marginTop: "2.5rem",
              padding: "1.2rem 0.6rem",
              borderRadius: "0.3rem",
              width: "100%",
              fontSize: "1.2rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
            variant="contained"
            startIcon={<SearchIcon />}
            color="primary"
            disabled={pushErrorsInArray()}
            type="submit"
          >
            Final Preview
          </Button>
        </form>
      </div>
    </PurchaseLayout>
  );
}
