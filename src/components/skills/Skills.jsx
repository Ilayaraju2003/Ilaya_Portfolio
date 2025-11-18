import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Technology Stack</h5>
      <h2>My Skills</h2>

      <div className="experience__container">

        <div className="experience__frontend">
          <h3>Front End</h3>
          <div className="experience__content">
            <article className="experience__details"><h4>React.js</h4></article>
            <article className="experience__details"><h4>JavaScript</h4></article>
            <article className="experience__details"><h4>HTML</h4></article>
            <article className="experience__details"><h4>CSS</h4></article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details"><h4>Github</h4></article>
            <article className="experience__details"><h4>Netlify</h4></article>
            <article className="experience__details"><h4>Vercel</h4></article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
