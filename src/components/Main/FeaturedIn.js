import "./FeaturedIn.css";
import "../../Variables.css";

export default function FeaturedIn() {
  return (
    <section className="featured__section">
      <div className="wrapper">
        <h2 className="featured__heading">As featured in</h2>
        <div className="featured__img">
          <img
            src={require("../../images/hero/forbes.png")}
            alt="Featured logos"
          />
          <img
            src={require("../../images/hero/orange.png")}
            alt="Featured logos"
          />
          <img
            src={require("../../images/hero/usa-today.png")}
            alt="Featured logos"
          />
          <img
            src={require("../../images/hero/nytimes.png")}
            alt="Featured logos"
          />
        </div>
      </div>
    </section>
  );
}
