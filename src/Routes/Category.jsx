import React from "react";
import GetCategoryReviews from "../Components/CategoryReviews";
import NavBar from "../Components/NavBar";
import ProfileSection from "../Components/ProfileSection";

const Category = () => {
  return (
    <div>
      <NavBar />
      <ProfileSection />
      <GetCategoryReviews />
    </div>
  );
};

export default Category;
