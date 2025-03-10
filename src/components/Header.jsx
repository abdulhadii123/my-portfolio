/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaDownload } from "react-icons/fa"; // Import Download Icon

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header-top-fixed one-page-nav ${
        mobileToggle ? "menu-open menu-open-desk" : ""
      } ${scrolled ? "fixed-header" : ""}`}
    >
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand" href="#">
            <h1>Abdul Hadi Mp</h1>
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className="main-menu">
          {["home", "about", "project", "services", "contactus"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                {item.charAt(0).toUpperCase() +
                  item.slice(1).replace("us", " Us")}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Contact Button & CV Download */}
        <div className="d-flex align-items-center">
          <ScrollLink
            to="contactus"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileToggle(false)}
            className="px-btn d-none d-lg-inline-flex text-nowrap"
          >
            Let's Talk
          </ScrollLink>

          {/* CV Download Button */}
          <a
            href="/Abdul-Hadi-Mp-.pdf"
            download="Abdul_Hadi_CV.pdf"
            className="px-btn d-flex align-items-center justify-content-center ms-3 d-lg-inline-flex d-block text-center"
          >
            CV <FaDownload />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="toggler-menu d-lg-none"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}
