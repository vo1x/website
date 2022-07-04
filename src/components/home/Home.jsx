import React from "react";
import "./Home.css";

import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
const Home = () => {
  return (
    <div className="content-wrapper">
      <section id="about">
        <div className="container about__container">
          <div className="top-txt ">
            <span className="header">
              <span className="serial-number number">01.</span>
              <span className="title">About Me</span>
            </span>
          </div>
          <p className="about-me__text">
            Hello! I'm volx and I enjoy developing things. My interest in web
            development started back in 2021 when I first tried making a website
            for my school project — surprisingly getting a navbar to stick to
            the top is a great way to learn HTML and CSS.
          </p>
          <p className="about-me__text">
            I truly enjoy building web apps but recently Game Development has
            piqued my interest and I can't wait to dabble in game making!
          </p>

          <p className="about-me__text">
            As for my frequently used languages, here are a few I am comfortable
            with:
            <ul className="skills-list">
              <li className="skill">
                <strong>Javascript</strong>
              </li>
              <li className="skill">
                <strong>Python</strong>
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section id="projects">
        <div className="container projects__container">
          <div className="top-txt ">
            <span className="header">
              <span className="serial-number number">02.</span>
              <span className="title">Projects</span>
            </span>
          </div>
          <div className="projects">
            <div className="project">
              <span className="project__name">Discord Timestamp Generator</span>
              <span className="project__desc">
                A simple timestamp generator for the less tech savy ones.
              </span>
              <div className="redirects">
                <a
                  href="https://github.com/vo1x/discord-timestamp-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="redirect__icon" />
                </a>

                <a
                  href="https://discord-timestamp-generator-azure.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink className="redirect__icon" />
                </a>
              </div>
              {/* 
              <span className="learn-more">
                Learn More
                <FaArrowRight />
              </span>*/}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contact__container">
          <div className="top-txt ">
            <span className="header">
              <span className="serial-number number">03.</span>
              <span className="title">Contact</span>
            </span>
          </div>
          <div className="contacts">
            <p>You can contact me through Telegram or email me directly.</p>
            <a href="https://t.me/itsvolx" rel="noreferrer" target="_blank">
              <div className="contact">
                <FaTelegramPlane />
                Telegram <span className="username">(@itsvolx)</span>
              </div>
            </a>
            <a href="">
              <div className="contact">
                <FaEnvelope />
                Email<span className="username">(vo1x.original@gmail.com)</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
