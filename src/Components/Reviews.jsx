import React from "react";
import { useEffect, useState } from "react";
import { fetchAllReviews } from "./Api";
import "../StyleSheets/GetAllReviews.css";
import ReviewCard from "./ReviewCard";

const GetAllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllReviews().then((data) => {
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
            <li className="allreviewslistitems" key={index}>
              <ReviewCard review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetAllReviews;
