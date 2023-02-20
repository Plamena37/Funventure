import "./HowItWorks.css";
import "../../../Variables.css";
import MapIcon from "@mui/icons-material/Map";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HowItWorksTablet = () => {
  return (
    <section className="how__section tablet__how">
      <div className="wrapper">
        <span class="subheading">How it works</span>
        <h2 class="heading__secondary">
          Your daily dose of fun in 3 simple steps
        </h2>
      </div>
      <div className="how__tablet">
        {/* 01 */}
        <div className="container__tablet">
          <div className="step">01</div>
          <div className="content">
            <MapIcon className="icon" />
            <h2>Create an account</h2>
            <p>
              If you don't have an account yet, we suggest you don't miss the
              fun and create one. It's super simple and fast!
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="container__tablet">
          <div className="step">02</div>
          <div className="content">
            <LightbulbIcon className="icon" />
            <h2>Filter your needs</h2>
            <p>
              If you don't want to look at all the happening events, you can
              simply filter the city, category or date.
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="container__tablet">
          <div className="step">03</div>
          <div className="content">
            <FavoriteIcon className="icon" />
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
};

export default HowItWorksTablet;
