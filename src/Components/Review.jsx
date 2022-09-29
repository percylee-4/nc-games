import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview } from "./Api";
import ReviewCard from "./ReviewCard";

const GetReview = () => {
  const [review, setReview] = useState([]);
  const id = useParams();
  useEffect(() => {
    fetchSingleReview(id.review_id).then((data) => {
      setReview([data.review]);
    });
  }, [id.review_id]);

  return (
    <div className="allreviewscontainer">
      <ul className="allreviewslist">
        {review.map((review, index) => {
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

export default GetReview;
