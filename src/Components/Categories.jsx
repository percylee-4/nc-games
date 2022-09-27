import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchAllCategories } from "./Api";
import "../StyleSheets/GetAllCategories.css";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllCategories().then((data) => {
      setIsLoading(false);
      setCategories(data.categories);
    }, []);
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="categorysection">
      <ul className="categorieslist">
        {categories.map((category, index) => {
          return (
            <Link
              to={`/Categories/${category.slug}`}
              key={index}
              className="category"
            >
              <li>
                {category.slug} <br /> {category.description}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GetAllCategories;
