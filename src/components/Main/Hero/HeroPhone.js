import "./Hero.css";
import "../../../Variables.css";
import HeroHeader from "./HeroHeader";

const HeroPhone = () => {
  return (
    <section className="hero__section__phone">
      <HeroHeader />
      <div className="hero__images">
        <div className="composition">
          <img
            className="composition__photo composition__photo--p1"
            src={require("../../../images/hero/hero-1.jpg")}
            alt="Activity"
          />
          <img
            className="composition__photo composition__photo--p2"
            src={require("../../../images/hero/hero-2.jpg")}
            alt="Activity"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPhone;
