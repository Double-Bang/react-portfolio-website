import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { SiUdemy } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Who Am I?</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Amin Aliyarzadeh enjoying a coffee." />
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <h2>Education</h2> 
              <FaGraduationCap className="about__icon" />
              <div>
                <h5>University of Guelph</h5>
                <small>Bachelor of Applied Science</small>
              </div>
            </article>

            <article className="about__card">
                <h2>Udemy</h2> 
              <SiUdemy className="about__icon" />
              <div>
                <h5>Continuously Learning</h5>
                <small>Will learn to suit client needs</small>
              </div>
            </article>

            <article className="about__card">
                <h2>Clients</h2> 
              <FaPaintBrush className="about__icon" />
              <div>
                <h5>Eye for Design</h5>
                <small>Helped dozens of clients and local business </small>
              </div>
            </article>
          </div>
          <p>
            After graduating from the University of Guelph, I discovered Udemy
            and enrolled in courses for graphic design and web-development. As I
            became more proficient with visual editing software like Adobe
            Photoshop and Adobe Illustrator, I began creating logos, icon sets,
            business cards, and even animations, for many clients and even some
            local businesses.
            <br />
            <br />
            Currently, my primary goal is to assit experienced software
            developers on larger projects to gain further experience in the
            industry. I’ve completed courses on Javascript and Node.js, and I'm
            familiar with CSS and the React library. Please get in touch with me
            if you think I can help!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
