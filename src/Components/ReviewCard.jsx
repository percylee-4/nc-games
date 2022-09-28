import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { patchVotes } from "./Api";
import CommentCard from "./CommentCard";

const ReviewCard = ({ review }) => {
  const [votes, setVotes] = useState(review.votes);
  const [err, setErr] = useState(null);
  const voteCount = votes;

  const handleClick = () => {
    if (voteCount === review.votes + 1) {
      setVotes((votes) => votes - 1);
      patchVotes(`${review.review_id}`, -1).catch((err) => {
        setVotes((votes) => votes - 1);
        setErr("oops, something went wrong. Please try again later");
      });
    } else {
      setVotes((votes) => votes + 1);
      patchVotes(`${review.review_id}`, 1).catch((err) => {
        setVotes((votes) => votes - 1);
        setErr("oops, something went wrong. Please try again later");
      });
    }
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
        <FaRegThumbsUp /> {votes}
      </button>
      <CommentCard review_id={review.review_id} />
    </section>
  );
};

export default ReviewCard;
