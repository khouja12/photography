import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Portfolio from "./../pages/Portfolio";
import Contact from "./../pages/Contact";

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
  return (
    <nav className="text-priamry xl:hidden">
      {/*nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen w-40"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={"/"}> Home</Link>
          </li>

          <li>
            <Link to={"/About"}> About</Link>
          </li>
          <li>
            <Link to={"/Portfolio"}> Portfolio</Link>
          </li>

          <li>
            <Link to={"/Contact"}> Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
