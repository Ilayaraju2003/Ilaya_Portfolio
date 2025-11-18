import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z5cyvns",
        "template_t4n2a9w",
        form.current,
        "cPN8zsr0o94eZMJHq"
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("Send Error:", error.text);
          alert("Failed to Send Message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ilayaraju2003@gmail.com</h5>
            <a href="mailto:ilayaraju2003@gmail.com">Email me!</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>ILAYARAJU</h5>
            <a
              href="https://www.linkedin.com/in/ilaya2003"
              target="_blank"
            >
              Message me on LinkedIn!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Full Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message..." required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
