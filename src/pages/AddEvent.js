import Navigation from "../components/Layout/Navigation";
import AddEventForm from "../components/AddEvent/AddEventForm";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
  const [category, setCategory] = useState("");

  const [fieldErrors, setFieldErrors] = useState({
    title: false,
    description: false,
    price: false,
    city: false,
    startTime: false,
    seats: false,
    team: false,
  });

  const validationConditions = {
    title: /(^$)|(^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$)/,
    description: /(^$)|(^.{10,500}$)/,
    price: /(^$)|(^[+]?\d+([.]\d+)?$)/,
    city: /(^$)|(^[a-zA-Z\s]*$)/,
    startTime: /(^$)|(^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$)/,
    seats: /(^$)|(^[+]?\d+([.]\d+)?$)/,
    team: /(^$)|(^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$)/,
  };

  const handleValidation = (fieldName, fieldValue) => {
    if (
      fieldName !== "date" &&
      fieldName !== "endTime" &&
      fieldName !== "category"
    ) {
      setFieldErrors({
        ...fieldErrors,
        [fieldName]: !validationConditions[fieldName].test(fieldValue),
      });
    }
  };

  // EVENT HANDLE CHANGE
  function eventHandleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setCategory(value);
    handleValidation(name, value);
  }

  // PUSHES THE ERROR BOOLEANS IN AN ARRAY
  const pushErrorsInArray = () => {
    let arrayWithValues = [];
    for (const errorValue in fieldErrors) {
      arrayWithValues.push(fieldErrors[errorValue]);
    }
    // IF THE ARRAY CONTAINS A FALSY VALUE, THE OPERATION STOPS AND RETURNS FALSE
    return arrayWithValues.some((element) => element === true);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let checkForErrors = pushErrorsInArray();

    if (!checkForErrors) {
      navigate("/added-event");
    }
  }

  return (
    <div className="form__body">
      <Navigation />
      <AddEventForm
        formData={formData}
        eventHandleChange={eventHandleChange}
        handleSubmit={handleSubmit}
        error={fieldErrors}
        pushErrorsInArray={pushErrorsInArray}
        category={category}
      />
      <Footer />
    </div>
  );
}
