import "./Testimonials.css";
import "../../Variables.css";
import TestCard from "./TestCard";
import testData from "../../testData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  const testCards = testData.map((item) => {
    return <TestCard key={item.id} item={item} />;
  });
  return (
    <div className="test__card">
      <div class="wrapper center-text">
        <span class="subheading">ratings</span>
        <h2 class="heading__secondary">Our Testimonials</h2>
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        useKeyboardArrows
        stopOnHover
        swipeable
      >
        {testCards}
      </Carousel>
    </div>
  );
}
