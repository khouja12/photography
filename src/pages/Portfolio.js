import React from "react";
import image1 from "../img/portfolio/1.png";
import image2 from "../img/portfolio/2.png";
import image3 from "../img/portfolio/3.png";
import image4 from "../img/portfolio/4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">portfolio</h1>

            <p className="mb-2 max-w-sm  ">
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
            <div className="mb-[8rem]  ">
              <Link to={"/Contact"} className="btn mb-[30px]mx-auto  lg:mx-0 ">
                Conatct Me
              </Link>
            </div>
          </motion.div>
          {/*image*/}
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <a href="/lifeStyle">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                  src={image1}
                  alt=""
                />
              </a>
            </div>

            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <a href="/Wedding">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                  src={image2}
                  alt=""
                />
              </a>
            </div>

            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <a href="/Baby">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                  src={image3}
                  alt=""
                />
              </a>
            </div>

            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <a>
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                  src={image4}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
