import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoDocument } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  let lastScrolly = window.pageYOffset;
  const controlnav = () => {
    if (window.scrollY > 100) {
      setNavbar(false);
    } else if (window.scrollY < lastScrolly) {
      setNavbar(true);
    }
    lastScrolly = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlnav);
    return () => {
      window.removeEventListener("scroll", controlnav);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`header ${showNavbar ? "visible" : "hidden"}`}>
      <h1>Sahaj</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navlinks ${menuOpen ? "active" : ""}`}>
        <NavLink className="link" to="/" onClick={() => setMenuOpen(false)}>
          <FaHome />
          Home
        </NavLink>
        <NavLink className="link" to="about" onClick={() => setMenuOpen(false)}>
          <FaUser />
          About
        </NavLink>
        <NavLink className="link" to="resume" onClick={() => setMenuOpen(false)}>
          <IoDocument />
          Resume
        </NavLink>
        <NavLink
          className="link"
          to="projects"
          onClick={() => setMenuOpen(false)}
        >
          <IoMdAnalytics />
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
