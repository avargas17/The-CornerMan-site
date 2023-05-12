import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">Corner Man</a>
      <ul className="menu">
        <li><a href="#">HOME</a></li>
        <li><a href="#">UFC</a></li>
        <li><a href="#">ONE</a></li>
        <li><a href="#">BELLATOR</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
