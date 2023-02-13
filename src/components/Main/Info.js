import "./Info.css";
import "../../Variables.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function Info() {
  return (
    <section className="info__section">
      <ul className="info wrapper">
        <li>
          <DateRangeIcon
            className="info__icon"
            style={{ fontSize: "2.5rem" }}
          />
          <p className="info__num">50+</p>
          <p className="info__desc">Events</p>
        </li>
        <li>
          <ThumbUpOffAltIcon
            className="info__icon"
            style={{ fontSize: "2.5rem" }}
          />
          <p className="info__num">100+</p>
          <p className="info__desc">Likes</p>
        </li>
        <li>
          <GroupsIcon className="info__icon" style={{ fontSize: "2.5rem" }} />
          <p className="info__num">300+</p>
          <p className="info__desc">Adventurers</p>
        </li>
        <li>
          <FmdGoodIcon className="info__icon" style={{ fontSize: "2.5rem" }} />
          <p className="info__num">6+</p>
          <p className="info__desc">Cities</p>
        </li>
      </ul>
    </section>
  );
}
