import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FetchSingleReview } from "./Api";

const GetReview = () => {
  const [review, setReview] = useState([]);
  const id = useParams();
  useEffect(() => {
    FetchSingleReview(id.review_id).then((data) => {
      setReview([data.review]);
    });
  }, []);

  return (
    <div>
      <ul className="singlereview">
        {review.map((review, index) => {
          return (
            <li className="allreviewslistitems" key={index}>
              "{review.title}" <br />
              Author: {review.owner} <br />
              comments: {review.comment_count} <br /> Votes: {review.votes}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetReview;
