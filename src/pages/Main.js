import Hero from "../components/Main/Hero";
import Navigation from "../components/Layout/Navigation";
import FeaturedIn from "../components/Main/FeaturedIn";
import HowItWorks from "../components/Main/HowItWorks";
import Examples from "../components/Main/Examples";
import Testimonials from "../components/Main/Testimonials";
import Info from "../components/Main/Info";
import Footer from "../components/Layout/Footer";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useState, useEffect } from "react";

export default function Main() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navigation />
      {showTopBtn && (
        <ArrowCircleUpRoundedIcon
          fontSize="large"
          className="home__icon"
          onClick={goToTop}
        />
      )}
      <Hero />
      <FeaturedIn />;
      <HowItWorks />
      <Examples />
      <section className="testimonial__layout">
        <Testimonials />
      </section>
      <Info />
      <Footer />
    </>
  );
}
