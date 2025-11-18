import React from "react";
import "./About.css";
import Ilayaraju from "../../assets/ilayaraju.jpg"; // Adjust the path as necessary


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div >
          <div className="about__me-image">
            <img src={Ilayaraju} alt="Description" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>School</h5>
              <small>
                I completed my school at Sri Ragavendra Matric Hr. Sec.School, Mecheri. 
              </small>
            </article>
            <article className="about__card">
              <h5>Diploma</h5>
              <small>
                I completed my Diploma in Computer Engineering at CSI Polytechnic College Salem.
              </small>
            </article>
            <article className="about__card">
              <h5>College</h5>
              <small>
                I completed my B.E.- Computer Science and Engineering at K.S.R College of Engineering,Tiruchengode. 
              </small>
            </article>
          </div>
          <p>
            I am a passionate Front-End Developer with a keen interest in creating dynamic and responsive web applications. 
            My journey in web development began with a fascination for how websites work, and it has since evolved into a full-fledged career.
          </p>
          <div className="about-footer">
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
