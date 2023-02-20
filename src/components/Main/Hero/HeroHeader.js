import { Link } from "react-router-dom";
import HeroTestimonial from "./HeroTestimonial";
import "./Hero.css";
import "../../../Variables.css";

const HeroHeader = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">Funventure</h1>
      <p className="hero__desc">
        We are the voice of travel committed to long-term, sustainable growth of
        adventure travel around.
      </p>
      <div className="hero__btn">
        <Link to="/events">
          <button className="btn btn--primary">All events</button>
        </Link>
        <Link to="/faq">
          <button className="btn btn--secondary">Learn more</button>
        </Link>
      </div>
      <HeroTestimonial />
    </div>
  );
};

export default HeroHeader;
