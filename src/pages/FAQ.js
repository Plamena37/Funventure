import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import "../components/Faq/Accordion.css";
import AccordionLeft from "../components/Faq/AccordionLeft";
import AccordionRight from "../components/Faq/AccordionRight";

export default function FAQ() {
  return (
    <>
      <Navigation />
      <header className="faq__header">
        <i class="fas fa-info-circle faq__icon"></i>
        <h1 className="heading__secondary faq__heading">
          Frequently asked questions
        </h1>
      </header>
      <section className="accordion__container">
        <AccordionLeft />
        <img
          className="faq__img"
          src={require("../images/faq/faq-1.png")}
          alt="icon"
        />
        <AccordionRight />
      </section>
      <Footer />
    </>
  );
}
