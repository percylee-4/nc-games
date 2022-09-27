import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const [votes, setVotes] = useState(review.votes);
  const [err, setErr] = useState(null);

  const handleClick = () => {
    setVotes((votes) => votes + 1);
    return axios
      .patch(`https://games-nc.herokuapp.com/api/reviews/${review.review_id}`, {
        inc_votes: 1,
      })
      .catch((err) => {
        setVotes((votes) => votes - 1);
        setErr("oops, something went wrong. Please try again later");
      });
  };

  if (err) {
    return <p> {err} </p>;
  }

  return (
    <section>
      <Link to={`/Review/${review.review_id}`}>
        <h3> "{review.title}" </h3>
        <p> Author: {review.owner} </p>
      </Link>
      <p> Comments: {review.comment_count} </p>
      <button onClick={handleClick}>
        {" "}
        <FaRegThumbsUp /> {votes}{" "}
      </button>
    </section>
  );
};

export default ReviewCard;
