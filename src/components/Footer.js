import React, { useState } from "react";
import "./Footer.css";
import logo from "../img/logo/WhatsApp Image 2024-03-18 at 15.19.36.jpeg";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="titleFooter">Contact</h3>
          <p className="FooterContent">Email: ykphotography2@gmail.com</p>
          <p className="FooterContent">Phone: 514-781-6008</p>
          <p className="FooterContent">Montreal</p>
        </div>
        <div className="footer-social">
          <h3 className="titleFooter">Follow Us</h3>
          <div className="social-links">
            {/* intagram */}
            <div className="tooltip-container">
              <div className="tooltip">
                <div className="profile">
                  <div className="user">
                    <div className="img">
                      <img src={logo} alt="" />
                    </div>
                    <div className="details">
                      <div className="name">User</div>
                      <div className="username">@___yk_photography____</div>
                    </div>
                  </div>
                  <div className="about">8000+ Followers</div>
                </div>
              </div>
              <div className="text">
                <a
                  className="icon"
                  href="https://www.instagram.com/___yk_photography____/"
                >
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="instagramSVG">
                      <svg
                        fill="white"
                        className="svgIcon"
                        viewBox="0 0 448 512"
                        height="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="text">Instagram</div>
                </a>
              </div>
            </div>

            {/* facebook  */}

            <section className="flex justify-center items-center">
              <a
                href="https://www.facebook.com/Yosra1991a"
                className={`group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold transition-all duration-500 ${
                  isHovered
                    ? "hover:translate-y-3 hover: hover:from-[#331029] hover:to-[#310413]"
                    : ""
                }`}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="3em"
                  viewBox="0 0 448 512"
                  strokeWidth="1"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-9"
                >
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                </svg>
                <span
                  className={`absolute ${
                    isHovered
                      ? "opacity-100 text-blue-700 text-sm -translate-y-10 duration-700"
                      : "opacity-0"
                  }`}
                >
                  Facebook
                </span>
              </a>
            </section>
          </div>
        </div>
        <div className="footer-about">
          <h3 className="titleFooter">About Us</h3>
          <p className="FooterContent">
            As a professional photographer based in Montreal, Canada, I am Yosra
            Khouja , dedicated to capturing life's most precious moments through
            my lens. With a passion for storytelling and an eye for detail, I
            specialize in wedding, birthday, and nature photography, crafting
            timeless images that evoke emotion and preserve memories for a
            lifetime. With years of experience and a commitment to excellence, I
            strive to exceed my clients' expectations, delivering stunning
            visuals that encapsulate the essence of every occasion. From
            intimate ceremonies to grand celebrations, I am honored to be
            entrusted with documenting life's most significant milestones.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="h1"> &copy;  Yosra khouja photography </p>
      </div>
    </footer>
  );
};

export default Footer;
