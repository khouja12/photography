import React from "react";
import womanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import "./Contact.css";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container h-full mx-auto">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start  gap-x-8 text-center lg:text-left   ">
          {/*bg*/}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 "
          ></motion.div>

          {/*text*/}
          <div className="lg:flex-1 lg:pt-32 px-4 ">
            <h1 className="h1"> contact me</h1>
            <p className="mb-12"> i would love to get suggestion from you. </p>

            {/*form*/}
            <form className="flex flex-col gap-y-4 ">
              <div className=" flex gap-x-10">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Your Full Name"
                />
                <input
                  className="input-field "
                  type="text"
                  placeholder="Your Email Adresse"
                />
                <input
                  className="input-field input-field-number"
                  type="text"
                  placeholder="Your Number"
                />
              </div>
              <input  
                className="input-field "
                
                type="text"
                placeholder="Your Message"
              />

              <button className="btn mb--[30px] mx-auto lg:mx-0 self-start ">
            
                Send it
              </button>
            </form>
          </div>

          {/*image*/}

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={womanImg} alt="Contact" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
