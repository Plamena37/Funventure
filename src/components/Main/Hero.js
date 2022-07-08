import "./Hero.css";
import "../../Variables.css";
import HeroTestimonial from "./HeroTestimonial";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero__section">
      <img
        className="hero__img"
        src={require("../../images/hero/hero-left.webp")}
        alt="Different activity images"
      ></img>
      <div className="hero">
        <h1 className="hero__heading">FunVenture</h1>
        <p className="hero__desc">
          We are the voice of travel committed to long-term, sustainable growth
          of adventure travel around.
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
      <img
        className="hero__img"
        src={require("../../images/hero/hero-right.webp")}
        alt="Different activity images"
      ></img>
    </section>
  );
}
