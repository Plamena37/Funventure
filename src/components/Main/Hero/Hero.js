import "./Hero.css";
import "../../../Variables.css";
import HeroDesktop from "./HeroDesktop";
import HeroTablet from "./HeroTablet";
import HeroPhone from "./HeroPhone";

export default function Hero() {
  return (
    <>
      <HeroDesktop />
      <HeroTablet />
      <HeroPhone />
    </>
  );
}
