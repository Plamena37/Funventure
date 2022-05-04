import Accordion from "../components/Faq/Accordion";
import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";

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
        <div className="accordion__left">
          <Accordion
            title="What is your return policy?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="How do I track my order?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Accordion
            title="Can I purchase items again?"
            content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             
        "
          />
        </div>
        <img className="faq__img" src={require("../images/faq/faq-1.png")} />
        <div className="accordion__right">
          <Accordion
            title="How do I make a purchase?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="Why is my credit card not working?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="What information do I need to check out?"
            content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             "
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
