import React from "react";
import "./contact.css";
import { SiGmail } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import {SiMessenger} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nbfss97', 'template_epftpeq', form.current, 'JfZGQQGXX8XdQ7ZDD')
 
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <a href="mailto:amin.aliyarzadeh@gmail.com">Contact with email</a>
          </article>

          <article className="contact__option">
            <SiDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <small>DoubleBang#5137</small>
          </article>

          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/AminAliyarzadeh" target="blank">
              Contact with messenger
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
