import React from "react";
import GetAllReviews from "../Components/Reviews";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

const Review = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <GetAllReviews />
    </div>
  );
};

export default Review;
