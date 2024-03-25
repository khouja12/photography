import React from "react";
import womanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import "./Contact.css";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const HandelSendMail = (event) => {
    event.preventDefault(); 

    const formData = {
      from_name: event.target.Name.value,
      Email_id: event.target.Email_id.value,
      Phone: event.target.Phone.value,
      Message: event.target.Message.value,
    };

   
    emailjs
      .send(
        "service_iwe7u5b",
        "template_gma7juz",
        formData,
        "NNnCktxzRTibAK7_b"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          event.target.Name.value =
            event.target.Email_id.value =
            event.target.Phone.value =
            event.target.Message.value =
              "";
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container h-full mx-auto contactContainer">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left">
          {/*bg*/}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>

          {/*text*/}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1"> Contact Me</h1>
            <p className="mb-12">
              I would love to hear from you and help you with your queries.
            </p>

            {/*form*/}
            <form className="flex flex-col gap-y-4" onSubmit={HandelSendMail}>
              <div className="flex flex-col lg:flex-row gap-x-10">
                <input
                  className="input-field"
                  name="Name"
                  type="text"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  className="input-field"
                  name="Email_id"
                  type="email" 
                  placeholder="Your Email Address"
                  required
                />
                <input
                  className="input-field input-field-number"
                  name="Phone"
                  type="tel" 
                  placeholder="Your Number"
                  required
                />
              </div>
              <textarea
                className="input-field"
                name="Message"
                placeholder="Your Message"
                required
              ></textarea>

              <button
                className="btn mb-4 lg:mb-0 lg:self-start"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>

          {/*image*/}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1 w-full lg:w-[300px]"
          >
            <img src={womanImg} alt="Contact" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
