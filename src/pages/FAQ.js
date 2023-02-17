import "../components/Faq/Accordion.css";
import AccordionLeft from "../components/Faq/AccordionLeft";
import AccordionRight from "../components/Faq/AccordionRight";
import NavigationLayout from "../components/Layout/NavigationLayout";

export default function FAQ() {
  return (
    <NavigationLayout>
      <header className="faq__header">
        <i class="fas fa-info-circle faq__icon"></i>
        <h1 className="heading__secondary faq__heading">
          Frequently asked questions
        </h1>
      </header>
      <section className="accordion__container">
        <AccordionLeft />
        <div className="accordion__image__wrapper">
          <img
            className="faq__img"
            src={require("../images/faq/faq-1.png")}
            loading="lazy"
            alt="icon"
          />
        </div>
        <AccordionRight />
      </section>
    </NavigationLayout>
  );
}
