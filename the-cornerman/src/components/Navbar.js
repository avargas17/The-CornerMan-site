import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import UFC from '../UFC/UFC_main.js'
import Home from '../Home'


function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Corner Man</a>
      <ul className="menu">
        <li><a href="/">HOME</a></li>
        <li><a href="/UFC">UFC</a></li>
        <li><a href="/ONE">ONE</a></li>
        <li><a href="/Bellator">BELLATOR</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
