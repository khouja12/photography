import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
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
    <nav className="text-priamry xl:hidden">
      <div onClick={toggleMenu} className="text-3xl cursor-pointer">
        {openMenu ? <IoMdClose /> : <CgMenuRight />}
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen md:max-w-sm"
      >
        <div
          onClick={toggleMenu}
          className="text-4xl absolute z-30 left-4 top-4 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={"/"} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/About"} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
          <div
          className="relative"
          onMouseEnter={openDropdownOnHover}
          onMouseLeave={closeDropdown}
        >
          <Link to={'/Portfolio'}>
            <span
              onClick={toggleDropdown}
              className="text-[#696c6d] hover:text-primary transition cursor-pointer"
            >
              Portfolio
            </span>
          </Link>
          {dropdownOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg p-2">
              <Link
                to={"/LifeStyle"}
                className="block py-1 text-[#696c6d] hover:text-primary transition"
              >
                Lifestyle
              </Link>
              <Link
                to={"/Wedding"}
                className="block py-1 text-[#696c6d] hover:text-primary transition"
              >
                Wedding
              </Link>
              <Link
                to={"/Baby"}
                className="block py-1 text-[#696c6d] hover:text-primary transition"
              >
                Baby
              </Link>
            </div>
          )}
        </div>
          </li>
          <li>
            <Link to={"/Contact"} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
