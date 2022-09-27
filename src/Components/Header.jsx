import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1> NC - Games</h1>
      </Link>
      <p> Review and discuss all things games!</p>
    </div>
  );
};

export default Header;
