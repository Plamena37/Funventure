import "./AddEventForm.css";
import AddEventLayout from "./AddEventLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validations } from "../validationMessages";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@material-ui/core";

export default function AddEventForm({
  formData,
  eventHandleChange,
  handleSubmit,
}) {
  // NEEDED FOR EVENT CATEGORY
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // Getting current date
  const curDate = new Date();

  // Getting the input Date
  // const inputDate = new Date(formData.date);
  // const dateValidation = inputDate < curDate;

  // Creating yyyy-mm-dd current date format
  const curYear = curDate.getFullYear().toString();
  let curMonth = curDate.getMonth() + 1;
  let curDay = curDate.getDate();

  if (curMonth < 10) {
    curMonth = `0${curMonth}`;
  }
  if (curDay < 10) {
    curDay = `0${curDay}`;
  }
  const curDateFinal = `${curYear}-${curMonth}-${curDay}`;

  return (
    <AddEventLayout children>
      <div className="add__events__header">
        <i class="fas fa-plus-circle events__icon"></i>
        <h2 className="form__primary__heading">Add New Event </h2>
      </div>
      <form className="add__event__form">
        {/************************ EVENT DESCRIPTION **********************************/}
        <section className="event__description">
          <nav className="form__nav">
            <i class="fas fa-info-circle form__icon"></i>
            <h3 className="form__heading">
              Event Desription <span>*</span>
            </h3>
          </nav>
          <div className="form__inputs">
            <TextField
              required
              className="form__input"
              id="title"
              name="title"
              value={formData.title}
              label="Event title"
              variant="outlined"
              onChange={(event) => eventHandleChange(event)}
              error={!/(^$)|(^[A-Za-z0-9]+$)/.test(formData.title)} //for letters and numbers
              helperText={
                !/(^$)|(^[A-Za-z0-9]+$)/.test(formData.title) &&
                validations.title
              }
            />
            <TextField
              required
              className="form__input"
              id="description"
              name="description"
              value={formData.description}
              variant="outlined"
              label={`Event Description (char: ${formData.description.length})`}
              multiline
              minRows={2}
              maxRows={4}
              onChange={(event) => eventHandleChange(event)}
              error={!/(^$)|(^.{10,500}$)/.test(formData.description)} // all characters between 10 and 500
              helperText={
                !/(^$)|(^.{10,500}$)/.test(formData.description) &&
                validations.description
              }
            />
            <TextField
              required
              className="form__input"
              id="price"
              name="price"
              value={formData.price}
              label="Ticket Price"
              variant="outlined"
              type="number"
              onChange={(event) => eventHandleChange(event)}
              error={!/(^$)|(^[+]?\d+([.]\d+)?$)/.test(formData.price)} // for positive numbers only
              helperText={
                !/(^$)|(^[+]?\d+([.]\d+)?$)/.test(formData.price) &&
                validations.positiveNumbersOnly
              }
            />
          </div>
        </section>

        {/************************ EVENT DETAILS **********************************/}
        <section className="event__details">
          <nav className="form__nav">
            <i class="fas fa-calendar-day form__icon"></i>
            <h3 className="form__heading">
              Event Details <span>*</span>
            </h3>
          </nav>
          <div className="form__inputs">
            <TextField
              required
              className="form__input"
              id="city"
              name="city"
              value={formData.city}
              label="City"
              variant="outlined"
              onChange={(event) => eventHandleChange(event)}
              error={!/(^$)|(^[a-zA-Z]+$)/.test(formData.city)} // will be true if the string contains numbers
              helperText={
                !/(^$)|(^[a-zA-Z]+$)/.test(formData.city) &&
                validations.lettersOnly
              }
            />

            <TextField
              required
              className="form__input"
              InputLabelProps={{ shrink: true }}
              id="date"
              name="date"
              value={formData.date}
              label="Date"
              variant="outlined"
              type="date"
              onChange={(event) => eventHandleChange(event)}
              InputProps={{
                inputProps: { min: curDateFinal },
              }}
              error={formData.date < curDateFinal && formData.date !== ""}
              helperText={
                formData.date < curDateFinal &&
                formData.date !== "" &&
                validations.date
              }
            />

            <div className="form__time">
              <TextField
                required
                className="form__input time"
                InputLabelProps={{ shrink: true }}
                id="startTime"
                name="startTime"
                value={formData.startTime}
                label="Start Time"
                variant="outlined"
                type="time"
                onChange={(event) => eventHandleChange(event)}
                error={
                  !/(^$)|(^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$)/.test(
                    formData.startTime
                  )
                } // will be true if the string contains numbers
                helperText={
                  !/(^$)|(^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$)/.test(
                    formData.startTime
                  ) && validations.time
                }
              />

              <TextField
                required
                className="form__input time"
                InputLabelProps={{ shrink: true }}
                id="endTime"
                name="endTime"
                value={formData.endTime}
                label="End Time"
                variant="outlined"
                type="time"
                onChange={(event) => eventHandleChange(event)}
              />
            </div>
          </div>
        </section>

        {/************************ EVENT CATEGORY **********************************/}
        <section className="event__category">
          <nav className="form__nav">
            <i class="fas fa-chair form__icon"></i>
            <h3 className="form__heading">
              Event Category and Seats <span>*</span>
            </h3>
          </nav>
          <div className="form__inputs select__category">
            <div className="select">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel
                    style={{ paddingLeft: "1rem" }}
                    id="demo-simple-select-label category__label"
                  >
                    Category
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="category"
                    name="category"
                    value={category}
                    label="Category"
                    variant="outlined"
                    className="form__input select"
                    onClick={handleChange}
                    onChange={(event) => eventHandleChange(event)}
                  >
                    <MenuItem value={"Festival"}>Festival</MenuItem>
                    <MenuItem value={"Concert"}>Concert</MenuItem>
                    <MenuItem value={"Outdoor"}>Outdoor</MenuItem>
                    <MenuItem value={"Theatre"}>Theatre</MenuItem>
                    <MenuItem value={"Sport Event"}>Sport Event</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <TextField
              required
              className="form__input select"
              id="seats"
              name="seats"
              label="Total Seats"
              variant="outlined"
              type="number"
              onChange={(event) => eventHandleChange(event)}
              error={!/(^$)|(^[+]?\d+([.]\d+)?$)/.test(formData.seats)} // for positive numbers only
              helperText={
                !/(^$)|(^[+]?\d+([.]\d+)?$)/.test(formData.seats) &&
                validations.positiveNumbersOnly
              }
            />
          </div>
        </section>

        {/************************ EVENT IMAGE **********************************/}
        <section className="event__image">
          <nav className="form__nav">
            <i class="fas fa-image form__icon"></i>
            <h3 className="form__heading">
              Event Image <span>*</span>
            </h3>
          </nav>
          <div>
            {/* <TextField
          required
          className="form__input"
          id="image"
          name="imagee"
          label="Image"
          variant="outlined"
           onChange={(event) => onChangeHandler(event)}
        /> */}
            <input type="file" style={{ display: "none" }} />
            <button className="event__img__btn">Upload Cover Image</button>
          </div>
        </section>

        {/************************ EVENT TEAM **********************************/}
        <section className="event__team">
          <nav className="form__nav">
            <i class="fas fa-user form__icon"></i>
            <h3 className="form__heading">
              Organizer Team <span>*</span>
            </h3>
          </nav>
          <div className="form__inputs">
            <TextField
              required
              name="team"
              id="team"
              className="form__input"
              label="Organizer Team"
              variant="outlined"
              onChange={(event) => eventHandleChange(event)}
              error={!/(^$)|(^[A-Za-z0-9]+$)/.test(formData.team)} //for letters and numbers
              helperText={
                !/(^$)|(^[A-Za-z0-9]+$)/.test(formData.team) &&
                validations.title
              }
            />
          </div>
        </section>

        {/************************ EVENT BTN **********************************/}
        <Link to="/added-event" className="purchase__link">
          <button className="event__form__btn" onClick={handleSubmit}>
            <i class="fas fa-upload"></i> Publish Event{" "}
          </button>
        </Link>
      </form>
    </AddEventLayout>
  );
}
