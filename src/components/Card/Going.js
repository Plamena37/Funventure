import "./Card.css";
import {
  CheckIcon,
  XIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export default function Going(props) {
  const [going, setGoing] = useState(false);
  const [goingCount, setGoingCount] = useState(Number(props.going));
  const [maybeCount, setMaybeCount] = useState(Number(props.maybe));
  const [cantCount, setCantCount] = useState(Number(props.cant));

  function goingTo() {
    setGoing((prevGoing) => !prevGoing);
    setGoingCount((prevGoingCount) =>
      !going ? prevGoingCount + 1 : prevGoingCount - 1
    );
  }

  function maybeTo() {
    setGoing((prevMaybe) => !prevMaybe);
    setMaybeCount((prevMaybeCount) =>
      !going ? prevMaybeCount + 1 : prevMaybeCount - 1
    );
  }

  function cantTo() {
    setGoing((prevCant) => !prevCant);
    setCantCount((prevCantCount) =>
      !going ? prevCantCount + 1 : prevCantCount - 1
    );
  }

  return (
    <section className="going__section">
      <div className="going">
        <button className="going__wrapper">
          <CheckIcon className="going__icon" onClick={goingTo} /> Going
        </button>
        <p className="going__data">{goingCount}</p>
      </div>

      <div className="going">
        <button className="going__wrapper">
          <QuestionMarkCircleIcon className="going__icon" onClick={maybeTo} />{" "}
          MayBe
        </button>
        <p className="going__data">{maybeCount}</p>
      </div>

      <div className="going">
        <button className="going__wrapper">
          <XIcon className="going__icon" onClick={cantTo} /> Can't Go
        </button>
        <p className="going__data">{cantCount}</p>
      </div>
    </section>
  );
}
