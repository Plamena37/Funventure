import "./Hero.css";
import "../../../Variables.css";
import HeroHeader from "./HeroHeader";

const HeroDesktop = () => {
  return (
    <section className="hero__section">
      <img
        className="hero__img"
        src={require("../../../images/hero/hero-left.webp")}
        loading="lazy"
        alt="Different activity images"
      ></img>
      <HeroHeader />
      <img
        className="hero__img"
        src={require("../../../images/hero/hero-right.webp")}
        loading="lazy"
        alt="Different activity images"
      ></img>
    </section>
  );
};

export default HeroDesktop;
