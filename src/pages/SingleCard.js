import Navigation from "../components/Layout/Navigation";
import SingleCardLayout from "../components/SingleCard/SingleCardLayout";
import SingleEvent from "../components/SingleCard/SingleEvent";
import Footer from "../components/Layout/Footer";

export default function SingleCard() {
  return (
    <>
      <Navigation />
      {/* <SingleCardLayout> */}
      <SingleEvent />
      {/* </SingleCardLayout> */}
      <Footer />
    </>
  );
}
