import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/Yosra1991a" target="_blank">
            <ImFacebook />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/___yk_photography____/"
            target="_blank"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="www.pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>

        <li>
          <a href="www.youtube.com" target="_blank">
            <ImYoutube />
          </a>
        </li>

        <li>
          <a href="www.twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
