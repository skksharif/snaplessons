import React, { useState, useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header>
        <NavLink to="/" onClick={closeMenu}>
          <div className="logo">
            <img src="./images/snaplessons.png" alt="Snap Lessons Logo" />
          </div>
        </NavLink>
        <div class="social-media phone">
          <a
            href="https://api.whatsapp.com/send?phone=9910154144/"
            target="_blank"
          >
            <img src="./images/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/snaplessons_pvt_ltd/?hl=en"
            target="_blank"
          >
            <img src="./images/instagram.png" alt="" />
          </a>
          <a href="mailto:teamhr@snaplessons.in">
            <img src="./images/email.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/snaplessons-private-limited/posts/?feedView=all">
            <img src="./images/linkedin.png" alt="" />
          </a>
        </div>
        <div className="navbar1" id="mynav">
          <div className="responsive">
            <div
              className={`menu-icon ${menuOpen ? "close" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar1"></div>
              <div className="bar"></div>
            </div>
          </div>
          <nav className={menuOpen ? "show" : ""}>
            <NavLink to="/" className="show-navitems" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="show-navitems" onClick={toggleMenu}>
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="show-navitems"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/courses"
              className="show-navitems"
              onClick={toggleMenu}
            >
              Courses
            </NavLink>
            <NavLink
              to="/clients"
              className="show-navitems"
              onClick={toggleMenu}
            >
              Our Clients
            </NavLink>
            <NavLink
              to="/contact"
              className="show-navitems"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="navbar" id="mynav">
        <div className="responsive">
          <div
            className={`menu-icon ${menuOpen ? "close" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <nav className={menuOpen ? "show" : ""}>
          <NavLink to="/" className="show-navitems">
            Home
          </NavLink>
          <NavLink to="/about" className="show-navitems">
            About Us
          </NavLink>
          <NavLink to="/services" className="show-navitems">
            Services
          </NavLink>
          <NavLink to="/courses" className="show-navitems">
            Courses
          </NavLink>
          <NavLink to="/clients" className="show-navitems">
          Our Clients
          </NavLink>
          <NavLink to="/contact" className="show-navitems">
            Contact Us
          </NavLink>
        </nav>
      </div>
    </>
  );
}
