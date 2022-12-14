import React from "react";
import GetAllCategories from "../Components/Categories";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

const Categories = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <GetAllCategories />
    </div>
  );
};

export default Categories;
