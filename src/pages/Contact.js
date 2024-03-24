import React from "react";
import womanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import "./Contact.css";
import emailjs from "emailjs-com"; // Correct import statement

const Contact = () => {
  const HandelSendMail = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const formData = {
      from_name: event.target.Name.value,
      Email_id: event.target.Email_id.value,
      Phone: event.target.Phone.value,
      Message: event.target.Message.value,
    };

    // Send email using emailjs
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
      <div className="container h-full mx-auto">
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
            <h1 className="h1"> contact me</h1>
            <p className="mb-12"> i would love to get suggestion from you, <br/> and make your resevation here. </p>

            {/*form*/}
            <form className="flex flex-col gap-y-4" onSubmit={HandelSendMail}>
              <div className="flex gap-x-10">
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
                  type="email" // Change type to "email"
                  placeholder="Your Email Address"
                  required
                />
                <input
                  className="input-field input-field-number"
                  name="Phone"
                  type="tel" // Consider using type "tel" for phone numbers
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
                className="btn mb--[30px] mx-auto lg:mx-0 self-start"
                type="submit"
              >
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
            className="lg:flex-1 w-[150px]"
          >
            <img src={womanImg} alt="Contact" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
