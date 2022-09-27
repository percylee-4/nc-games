import React from "react";
import GetCategoryReviews from "../Components/CategoryReviews";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

const Category = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <GetCategoryReviews />
    </div>
  );
};

export default Category;
