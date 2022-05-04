import "./Card.css";
import "../../Colors.css";
import Price from "./Price";
import Image from "./Image";
import Details from "./Details";
import Going from "./Going";
import Likes from "./Likes";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <section className="card__layout">
      <div className="card">
        <Price price="20" title="Powder Festival" />
        {/* <div></div> */}
        <Link to="/event">
          <Image seats="300" />
        </Link>

        <Details
          city="Burgas"
          date="03 Oct 2022"
          timeFrom="2 PM"
          timeTo="4 PM"
          category="Festival"
        />
        <Going going="30" maybe="20" cant="15" />
        <Likes like="137" />
      </div>
    </section>
  );
}
