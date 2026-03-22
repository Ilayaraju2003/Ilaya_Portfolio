import React from "react";
import "./About.css";
import profilePic from "../../assets/ilayaraju1.jpeg";

const About = () => {
  return (
    <section id="about" className="about">

      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        {/* Profile Image */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={profilePic} alt="Ilayaraju" />
          </div>
        </div>

        {/* About Content */}
        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <h5>School</h5>
              <small>
                I completed my school at Sri Ragavendra Matric Hr. Sec. School,
                Mecheri.
              </small>
            </article>

            <article className="about__card">
              <h5>Diploma</h5>
              <small>
                Diploma in Computer Engineering at CSI Polytechnic College,
                Salem.
              </small>
            </article>

            <article className="about__card">
              <h5>College</h5>
              <small>
                B.E Computer Science and Engineering at K.S.R College of
                Engineering, Tiruchengode.
              </small>
            </article>

          </div>

          <p>
            I am a passionate Full-Stack Developer with a strong interest in building responsive and modern web applications. 
            I work with technologies like HTML, CSS, JavaScript, React.js, Node.js, and databases to create scalable and user-friendly solutions. 
            I enjoy developing both front-end interfaces and back-end functionality while continuously improving my skills in web development.
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