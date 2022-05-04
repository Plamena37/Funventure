import Navigation from "../components/Layout/Navigation";
import SingleCardLayout from "../components/SingleCard/SingleCardLayout";
import SingleCardHeader from "../components/SingleCard/SingleCardHeader";
import SingleCardInfo from "../components/SingleCard/SingleCardInfo";
import Footer from "../components/Layout/Footer";

export default function SingleCard() {
  return (
    <>
      <Navigation />
      <SingleCardLayout>
        <SingleCardHeader />
        <SingleCardInfo />
      </SingleCardLayout>
      <Footer />
    </>
  );
}
