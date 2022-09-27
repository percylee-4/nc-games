import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchAllCategoryReviews } from "./Api";
import "../StyleSheets/GetCategoryReviews.css";

const GetCategoryReviews = () => {
  const [reviews, setReviews] = useState([]);
  const category = useParams();

  useEffect(() => {
    FetchAllCategoryReviews(category.slug).then((data) =>
      setReviews(data.reviews)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="categoryreviews">
      <h1 className="categoryheading">{category.slug} reviews</h1>
      <div>
        <ul className="categoryreviewslist">
          {reviews.map((review, index) => {
            return (
              <Link to={`/Review/${review.review_id}`}>
                <li key={index} className="categoryli">
                  {" "}
                  "{review.title}" <br /> {review.owner}
                </li>{" "}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GetCategoryReviews;
