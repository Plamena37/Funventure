import Navigation from "../components/Layout/Navigation";
import EventDetailLayout from "../components/EventDetail/EventDetailLayout";
import EventDetail from "../components/EventDetail/EventDetail";
import Footer from "../components/Layout/Footer";

export default function SingleCard() {
  return (
    <>
      <Navigation />
      {/* <EventDetailLayout> */}
      <EventDetail />
      {/* </EventDetailLayout> */}
      <Footer />
    </>
  );
}
