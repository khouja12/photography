import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import "./Portfolio.css";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="sectionP"
    >
      <div className="whole-page-Portfolio container mx-auto h-full relative">
        <div className="section-potfolio ">
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1 titleP">portfolio</h1>

            <p className="portfolio-Paragraph ">
              Welcome to my portfolio, where moments come alive through the art
              of photography. Here, you'll find a curated collection of my work,
              showcasing the diverse range of subjects and styles I specialize
              in. From the tender embrace of a newlywed couple to the vibrant
              colors of nature's landscapes, each image tells a unique story,
              captured with precision and passion. Whether you're seeking
              inspiration for your own special event or simply appreciate the
              beauty of the world around us, I invite you to explore and immerse
              yourself in the visual journey that awaits within these pages.
              Every photograph is not just a picture but a reflection of the
              emotions, memories, and experiences that make life extraordinary.
            </p>

            <br />
            <br />

            <div className="mb-[8rem]">
              <Link to={"/Contact"} className="btn mb-[30px] mx-auto lg:mx-0">
                Contact Me &nbsp;
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
          {/*image*/}
          <div class="myWork">
            <div class="h1 myWorkTitles"> My work</div>
            <Link to={"/lifeStyle"}>
              <b>.</b>LifeStyle<b>.</b>
            </Link>
            <Link to={"/Wedding"}>
              <b>.</b>Wedding<b>.</b>
            </Link>
            <Link to={"/Baby"}>
              <b>.</b>Baby<b>.</b>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
