import Chevron from "./Chevron";
import "../../Variables.css";
import { useState, useRef } from "react";
import "./Accordion.css";

export default function Accordion(props) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };
  return (
    <section className="accordion__section">
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${rotate}`} />
      </button>
      <div
        className="accordion__content"
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </section>
  );
}
