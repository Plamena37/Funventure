import Navigation from "../components/Layout/Navigation";
import AddEventForm from "../components/AddEvent/AddEventForm";
import Footer from "../components/Layout/Footer";
import { useState } from "react";

export default function Events() {
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
  // FIXME
  const [globalErrorState, setGlobalErrorState] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  function eventHandleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit((prevSubmit) => !prevSubmit);

    alert(`(${isSubmit}) this is the submit state`);
  }
  return (
    <>
      <div className="form__body">
        <Navigation />
        <AddEventForm
          formData={formData}
          eventHandleChange={eventHandleChange}
          handleSubmit={handleSubmit}
        />
        <Footer />
      </div>
    </>
  );
}
