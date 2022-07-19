import Navigation from "../components/Layout/Navigation";
import AddEventForm from "../components/AddEvent/AddEventForm";
import Footer from "../components/Layout/Footer";

export default function Events() {
  return (
    <div className="form__body">
      <Navigation />
      <AddEventForm />
      <Footer />
    </div>
  );
}
