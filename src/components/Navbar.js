import React, { useState, useEffect } from "react";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Logo from "../images/logo.svg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 85) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      scrollNav={scrollNav}
      className={
        (scrollNav ? "bg-scroll-nav shadow-md" : "bg-transparent") +
        " nav-bar"
      }
    >
      <div className="navbar-container">
        <LinkS to="/" className="cursor-pointer">
          <img src={Logo} alt="nav-logo" onClick={toggleHome} />
        </LinkS>

        <div className="block md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </div>

        <div className="hidden md:block">
          <LinkS
            to="our-way"
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            className="navbar-link navlink"
          >
            Our way
          </LinkS>

          <LinkS
            to="our-philosophy"
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            className="navbar-link navlink"
          >
            Our philosophy
          </LinkS>

          <LinkS
            to="faq"
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            className="navbar-link navlink"
          >
            FAQ
          </LinkS>

          <LinkR
            to="/request-invite"
            className="navbar-link"
          >
            Request invite
          </LinkR>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
