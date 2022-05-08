import "./Card.css";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Likes(props) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Number(props.like));

  const styles = {
    fill: liked ? "#4c45b3" : "#fff",
  };

  const like = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevLikeCount) =>
      !liked ? prevLikeCount + 1 : prevLikeCount - 1
    );
  };
  return (
    <section className="likes__section">
      <div className="likes">
        <p className="likes__text">
          {" "}
          <HeartIcon
            style={styles}
            className="likes__icon"
            onClick={like}
          />{" "}
          Like <span>{likeCount}</span>
        </p>
      </div>
      <Link to="/purchase">
        <button className="btn  btn__likes">Buy Ticket</button>
      </Link>
    </section>
  );
}
