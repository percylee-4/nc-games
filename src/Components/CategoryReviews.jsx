import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllReviews } from "./Api";
import "../StyleSheets/CategoryReviews.css";
import ReviewCard from "./ReviewCard";

const GetCategoryReviews = () => {
  const [reviews, setReviews] = useState([]);
  const category = useParams();

  useEffect(() => {
    fetchAllReviews(category.slug).then((data) => setReviews(data.reviews));
  }, [category.slug]);

  return (
    <div className="allreviewscontainer">
      <ul className="allreviewslist">
        <h1 className="categorytitle">{category.slug} reviews</h1>
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="allreviewslistitems">
              <ReviewCard review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetCategoryReviews;
