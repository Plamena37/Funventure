import "./HowItWorks.css";
import "../../Variables.css";
import { HeartIcon, LightBulbIcon, MapIcon } from "@heroicons/react/outline";

export default function HowItWorks() {
  return (
    <section className="how__section">
      <div className="wrapper">
        <span class="subheading">How it works</span>
        <h2 class="heading__secondary">
          Your daily dose of fun in 3 simple steps
        </h2>
      </div>
      <div className="how">
        {/* 01 */}
        <div className="container left">
          <div className="step">01</div>
          <MapIcon className="icon" />
          <div className="content">
            <h2>Create an account</h2>
            <p>
              If you don't have an account yet, we suggest you don't miss the
              fun and create one. It's super simple and fast!
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="container right">
          <div className="step">02</div>
          <LightBulbIcon className="icon" />
          <div className="content">
            <h2>Filter your needs</h2>
            <p>
              If you don't want to look at all the happening events, you can
              simply filter the city, category or date.
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="container left">
          <div className="step">03</div>
          <HeartIcon className="icon" />
          <div className="content">
            <h2>Simply buy a ticket</h2>
            <p>
              When you choose an event, click on "Buy Ticket", there provide the
              needed information and there you go!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
