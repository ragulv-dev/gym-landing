import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Powerhouse Gym
        </Link>
        <ul className={menuActive ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/classes" className="nav-link" onClick={closeMenu}>
              Classes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trainers" className="nav-link" onClick={closeMenu}>
              Trainers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={menuActive ? "hamburger active" : "hamburger"}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
