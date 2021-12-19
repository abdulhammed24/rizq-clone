import React from "react";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Logo from "../images/logo.svg";

const MobileBar = ({ open, toggle }) => {
const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      open={open}
      toggle={toggle}
      className={
        (open ? "translate-x-0" : "-translate-x-full") +
        " bg-yellow h-full w-full z-20 transform left-0  fixed top-0 md:hidden transition duration-500 ease-out"
      }
    >
      <div className="w-container-mobile mx-auto my-0">
        <div className="flex justify-between h-nav items-center mb-14">
          <LinkS to="/" >
            <img src={Logo} alt="nav-logo" onClick={() => {toggleHome(); toggle();} } />
          </LinkS>

          <div className="cursor-pointer" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M11 0.7H13V23.3H11z"
                transform="rotate(-45.001 12 12)"
              ></path>
              <path
                d="M0.7 11H23.3V13H0.7z"
                transform="rotate(-45.001 12 12)"
              ></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-rows-5 text-center gap-10">
          <LinkS
            to="our-way"
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            className="text-3xl"
            onClick={toggle}>
            Our way
          </LinkS>

          <LinkS to="our-philosophy" spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            className="text-3xl"
            onClick={toggle}>
            Our philosophy
          </LinkS>

          <LinkS to="faq" spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            className="text-3xl"
            onClick={toggle}>
            FAQ
          </LinkS>

          <LinkR to="/request-invite" className="text-3xl" onClick={toggle}>
            Request invite
          </LinkR>
        </div>
      </div>
    </div>
  );
};

export default MobileBar;
