import React from "react";
import "./Projectwork.css";

import Cloudcafe from "../../assets/cloudcafe.jpg";
import texttospeech from "../../assets/texttospeech.jpg";
import chat from "../../assets/chat.jpg";
import developer from "../../assets/developer.jpg";
import crypto from "../../assets/cryptow.jpg";

const projects = [
  {
    title: "Developer Profile website",
    tech: ["HTML", "CSS", "JavaScript","React.js"],
    description:
      "A responsive personal portfolio website to showcase my projects, skills, and experience. It features a clean design, easy navigation, and works smoothly on all devices.",
    live: "https://profile-gidy.vercel.app/",
    image: developer,
  },
    {
    title: "Crypto Tracker Web App",
    tech: ["HTML5", "CSS3", "JavaScript","React.js"],
    description:
      "A responsive cryptocurrency tracking web app that displays real-time crypto prices and market data. It features a clean interface, easy navigation, and helps users quickly view and monitor different cryptocurrencies.",
    live: "https://crypto-currency-six-zeta.vercel.app/",
    image: crypto,
  },
  {
    title: "Coffee Shop Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a mobile-friendly coffee shop website with engaging UI components and improved performance.",
    live: "https://cloud-coffee.netlify.app/",
    image: Cloudcafe,
  },

  {
    title: "ChatGPT Clone",
    tech: ["HTML", "CSS"],
    description:
      "A web-based chat application that replicates conversational features similar to ChatGPT.",
    live: "https://chatgpt-clone-bot.netlify.app/",
    image: chat,
  },

  {
    title: "Text To Speech",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A web application that converts text input into speech using browser speech synthesis.",
    live: "https://text-to-speech-01.netlify.app/",
    image: texttospeech,
  },
];

const Projectwork = () => {
  return (
    <section id="projectwork" className="projects">

      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className="container projects__container">

        {projects.map((project, index) => (
          <div key={index} className="project__card">

            <img
              src={project.image}
              alt={project.title}
              className="project__image"
            />

            <h3>{project.title}</h3>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>

            <p className="project__description">
              {project.description}
            </p>

            <div className="btn-group">
              <a
                href={project.live}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Project
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projectwork;