import React from "react";
import "./Projectwork.css";
// import ChatGPTclone from "../../assets/chatclone .jpg"; // Adjust the path as necessary
import Cloudcafe from "../../assets/cloudcafe.jpg"; // Adjust the path as necessary
import texttospeech from "../../assets/texttospeech.jpg"; // Adjust the path as necessary
import chat from "../../assets/chat.jpg"; // Adjust the path as necessary

const projects = [
  {
    title: "Coffee Shop website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Created and built a mobile-friendly coffee shop website to design, engaging user  interface components, and enhanced performance for a captivating user experience.",
    live: "https://cloud-coffee.netlify.app/",
       image: Cloudcafe,
  },
  {
    title: "Chat GPT Clone ",
    tech: ["HTML", "CSS"],
    description:
      "A ChatGPT Clone is a web based chat application that conversational abilities of chatGPT.",
    live: "https://chatgpt-clone-bot.netlify.app/",
    image: chat,
  },
  {
    title: "Text to speech",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Real-time chat app where users can chat with friends using unique room IDs.",
    live: "https://text-to-speech-01.netlify.app/",
    image: texttospeech,
  },  
];


const Projectwork = () => {
  return (
    <section id="projectwork" >
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div key={index} className="project__card">
           <img src={project.image} alt={project.title} className="project__image" />
            <h3>{project.title}</h3>
            <p className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </p>

            <p>{project.description}</p>

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

export default Projectwork
