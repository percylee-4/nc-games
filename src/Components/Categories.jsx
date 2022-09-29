import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchAllCategories } from "./Api";
import "../StyleSheets/Categories.css";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllCategories().then((data) => {
      setIsLoading(false);
      return setCategories(data.categories);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loadingcontainer">
        <p className="loading"> Loading...</p>
      </div>
    );
  }

  return (
    <div className="categorysection">
      <section className="categorypage">
        <ul className="categorieslist">
          {categories.map((category, index) => {
            return (
              <section className="categorycard" key={index}>
                <Link to={`/Categories/${category.slug}`} className="category">
                  <li className="categoryheader"> {category.slug} </li>
                  <li className="categorydescription">
                    {category.description}
                  </li>
                </Link>
              </section>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default GetAllCategories;
