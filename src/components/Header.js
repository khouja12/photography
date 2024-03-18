import React, { useState } from "react";
import Logo from "../img/header/logo.svg";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openDropdownOnHover = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="relative w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex dlex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="max-w-[200px] " />
        </Link>

        <nav className="hidden xl:flex gap-x-12 ">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition "
          >
            Home
          </Link>

          <Link
            to={"/About"}
            className="text-[#696c6d] hover:text-primary transition "
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={openDropdownOnHover}
            onMouseLeave={closeDropdown}
          >
            <span
              onClick={toggleDropdown}
              className="text-[#696c6d] hover:text-primary transition cursor-pointer"
            >
              Portfolio
            </span>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg p-2">
                <Link
                  to={"/LifeStyle"}
                  className="block py-1 text-[#696c6d] hover:text-primary transition"
                >
                  Lifestyle
                </Link>
                <Link
                  to={"/Portfolio"}
                  className="block py-1 text-[#696c6d] hover:text-primary transition"
                >
                  Wedding
                </Link>
                <Link
                  to={"/Portfolio"}
                  className="block py-1 text-[#696c6d] hover:text-primary transition"
                >
                  Baby
                </Link>
              </div>
            )}
          </div>

          <Link
            to={"/Contact"}
            className="text-[#696c6d] hover:text-primary transition "
          >
            Contact
          </Link>
        </nav>
      </div>

      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
