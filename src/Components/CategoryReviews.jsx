import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllReviews } from "./Api";
import "../StyleSheets/GetCategoryReviews.css";
import ReviewCard from "./ReviewCard";

const GetCategoryReviews = () => {
  const [reviews, setReviews] = useState([]);
  const category = useParams();

  useEffect(() => {
    fetchAllReviews(category.slug).then((data) => setReviews(data.reviews));
  }, [category.slug]);

  return (
    <div className="categoryreviews">
      <h1 className="categoryheading">{category.slug} reviews</h1>
      <div>
        <ul className="categoryreviewslist">
          {reviews.map((review, index) => {
            return (
              <li key={index}>
                <ReviewCard review={review} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GetCategoryReviews;
