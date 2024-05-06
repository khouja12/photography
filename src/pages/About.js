import React from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { FaArrowRight } from "react-icons/fa";

import './About.css'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mw-auto h-full ml-20 relative">
        {/* text & image */}

        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 lg:text-left lg:pt-16 ">
          {/*  image */}
         

          {/*  text */}

          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1">About me</h1>

            <p className="mb-2  ">
            As a professional photographer based in Montreal, Canada, <br/> I am <b> Yosra Khouja </b>, dedicated to capturing life's most precious moments through my lens. With a passion for storytelling and an eye for detail, I specialize in wedding, birthday, and nature photography, crafting timeless images that evoke emotion and preserve memories for a lifetime. With years of experience and a commitment to excellence, I strive to exceed my clients' expectations, delivering stunning visuals that encapsulate the essence of every occasion. From intimate ceremonies to grand celebrations, I am honored to be entrusted with documenting life's most significant milestones.
            </p>

          

            <br />
            <Link to={"/Portfolio"} className="btn">
              view my work &nbsp;<FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
