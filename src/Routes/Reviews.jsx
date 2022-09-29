import React from "react";
import GetAllReviews from "../Components/Reviews";
import NavBar from "../Components/NavBar";
import ProfileSection from "../Components/ProfileSection";

const Review = () => {
  return (
    <div>
      <NavBar />
      <ProfileSection />
      <GetAllReviews />
    </div>
  );
};

export default Review;
