import React from "react";
import { useEffect, useState } from "react";
import { FetchAllReviews } from "./Api";
import "../StyleSheets/GetAllReviews.css";
import { Link } from "react-router-dom";

const GetAllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchAllReviews().then((data) => {
      setIsLoading(false);
      setReviews(data.reviews);
    });
  }, []);

  if (loading) {
    return <p className="loading"> im loading pls wait </p>;
  }
  return (
    <div className="allreviewscontainer">
      <ul className="allreviewslist">
        {reviews.map((review, index) => {
          return (
            <Link to={`/Review/${review.review_id}`}>
              <li className="allreviewslistitems" key={index}>
                "{review.title}" <br />
                Author: {review.owner} <br />
                comments: {review.comment_count} <br /> Votes: {review.votes}{" "}
              </li>{" "}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GetAllReviews;
