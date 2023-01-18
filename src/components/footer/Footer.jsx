import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        DoubleBang
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/amin-aliyarzadeh-34a485262/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Double-Bang" target="blank">
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZeuntFXxjv9rjpmsg-O2yQ"
          target="blank"
        >
          <BsYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DoubleBang. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
