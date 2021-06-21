import React from 'react';
import favicon from '../img/favicon.ico'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoHenry" src={favicon} width="30" height="30" className="d-inline-block align-top" alt="" />
          ClimApp
        </span>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
