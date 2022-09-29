import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/NavBar.css";
import { BiCategory } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import logo from "../Assets/NClogo copy.png";

const NavBar = () => {
  return (
    <section className="nav">
      <div className="nav-items">
        <Link to="/">
          <img alt='North coders logo in red' src={logo} className="logo" />
        </Link>
        <Link to="/Categories" className="categories">
          <BiCategory className="navicons" />
          <h3 className="navheadings"> Categories </h3>
        </Link>
        <Link to="/Reviews" className="reviews">
          <MdOutlineComment className="navicons" />
          <h3 className="navheadings"> Reviews </h3>
        </Link>
      </div>
    </section>
  );
};

export default NavBar;
