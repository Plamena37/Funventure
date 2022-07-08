import "./HeroTestimonial.css";
import "../../Variables.css";

export default function HeroTestimonial() {
  return (
    <div className="hero__test">
      <div className="hero__test__img">
        <img
          src={require("../../images/hero/customer-1.jpg")}
          alt="Customer photo"
        />
        <img
          src={require("../../images/hero/customer-2.jpg")}
          alt="Customer photo"
        />
        <img
          src={require("../../images/hero/customer-3.jpg")}
          alt="Customer photo"
        />
        <img
          src={require("../../images/hero/customer-4.jpg")}
          alt="Customer photo"
        />
        <img
          src={require("../../images/hero/customer-5.jpg")}
          alt="Customer photo"
        />
      </div>
      <p class="hero__test__text">
        <span>100+</span> participants involved last year!
      </p>
    </div>
  );
}
