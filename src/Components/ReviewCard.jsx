import React, { useEffect } from "react";
import { FaRegThumbsUp, FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { patchVotes } from "./Api";
import CommentCard from "./CommentCard";
import "../StyleSheets/ReviewCard.css";
import axios from "axios";

const ReviewCard = ({ review }) => {
  const [votes, setVotes] = useState(review.votes);
  const [err, setErr] = useState(null);
  const voteCount = votes;
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://games-nc.herokuapp.com/api/users/${review.owner}`)
      .then((res) => setUser(res.data.user));
  }, [review.owner]);

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
    <section className="reviewcard">
      <Link to={`/Review/${review.review_id}`}>
        <img alt='user avatar' src={user.avatar_url} className="userimage" />
        <p className="reviewauthor"> @{review.owner} </p>
        <p className="reviewtitle">
          <strong> "{review.title}" </strong>{" "}
        </p>
        <img alt='review specific' src={review.review_img_url} className="reviewimg" />
      </Link>
      <div className="commentsvotes">
        <p className="commenticon">
          <FaRegCommentDots /> {review.comment_count}
        </p>
        <button onClick={handleClick} className="votes">
          <FaRegThumbsUp /> {votes}
        </button>
      </div>
      <CommentCard review_id={review.review_id} className="ccard" />
    </section>
  );
};

export default ReviewCard;
