/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import icon1 from "../assets/img/nav-icon1.svg";
import icon2 from "../assets/img/nav-icon2.svg";
import icon3 from "../assets/img/nav-icon3.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scolled, setScrolled] = useState(false);

  useEffect(() => {
    const onSroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", onSroll);
    return () => window.removeEventListener("scroll", onSroll);
  }, []);

  const classN = scolled ? "scrolled " : "";

  return (
    <nav className={classN + "navbar navbar-expand-lg bg-dark"}>
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>

        <span className="navbar-text">
          <div className="social-icon">
            <a href="">
              <img src={icon1} alt="icon" />
            </a>
            <a href="#">
              <img src={icon2} alt="icon" />
            </a>
            <a href="#">
              <img src={icon3} alt="icon" />
            </a>
          </div>
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
