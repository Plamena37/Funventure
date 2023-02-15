import "./Examples.css";
import "../../Variables.css";
import CheckIcon from "@mui/icons-material/Check";

export default function Examples() {
  return (
    <section className="example__section">
      <div class="wrapper center-text">
        <span class="subheading">Events</span>
        <h2 class="heading__secondary">Funventure chooses from best events</h2>
      </div>
      <div className="wrapper example__grid">
        <img
          className="example__img"
          src={require("../../images/cardExample/card.png")}
          alt="Card example"
        />

        <img
          className="example__img"
          src={require("../../images/cardExample/card_1.png")}
          alt="Card example"
        />

        <div class="genres">
          <h3 class="heading__tertiary">Works with any category:</h3>
          <ul class="list">
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Seminars</span>
            </li>
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Ceremonies </span>
            </li>
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Concerts</span>
            </li>
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Fests</span>
            </li>
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Theatre</span>
            </li>
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Sport events</span>
            </li>
            <li class="list__item">
              <CheckIcon className="example__icon" />
              <span>Competitions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
