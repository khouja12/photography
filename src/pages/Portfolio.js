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
              Dissimulatis timeri et nobilitatis modi Minervius urbi paucis
              acervi et et <b>acervi paucis et nobilitatis legati haec</b>
              senator quae praefecto inlicito aerumnarum timeri et grandiora
              sint Minervius ex inusitato acervi.
            </p>

            <br />

            <p className="mb-2 max-w-sm ">
              Dissimulatis timeri et nobilitatis modi Minervius urbi paucis
              acervi et et acervi paucis et nobilitatis legati haec senator quae
              praefecto inlicito aerumnarum timeri et grandiora sint Minervius
              ex inusitato acervi.
            </p>

            <br />
            <Link to={"/Contact"} className="btn mb-[30px]mx-auto lg:mx-0 ">
              hire me
            </Link>
          </motion.div>
          {/*image*/}
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                src={image1}
                alt=""
              />
            </div>

            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                src={image2}
                alt=""
              />
            </div>

            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                src={image3}
                alt=""
              />
            </div>

            <div className="max-w[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500  "
                src={image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
