import React from "react";
import GetAllCategories from "../Components/Categories";
import NavBar from "../Components/NavBar";
import ProfileSection from "../Components/ProfileSection";

const Categories = () => {
  return (
    <div>
      <NavBar />
      <ProfileSection />
      <GetAllCategories />
    </div>
  );
};

export default Categories;
