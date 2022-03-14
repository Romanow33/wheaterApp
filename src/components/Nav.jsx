import React from "react";
import favicon from "../img/favicon.ico";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <span className="title">ClimApp</span>
      </span>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
