import Hero from "../components/Main/Hero";
import Navigation from "../components/Layout/Navigation";
import FeaturedIn from "../components/Main/FeaturedIn";
import HowItWorks from "../components/Main/HowItWorks";
import Examples from "../components/Main/Examples";
import Testimonials from "../components/Main/Testimonials";
import Info from "../components/Main/Info";
import Footer from "../components/Layout/Footer";

export default function Main() {
  return (
    <>
      <Navigation />
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
