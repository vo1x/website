import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

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
            Hi! I'm volx, an aspiring web developer. After learning Python for a
            year, I decided to broaden my epic hackerman skills and began
            learning web development, which I have been doing for the past
            month. If you're wondering about my current skill level, it takes me
            15 minutes to center divs. I'm also interested in mobile app
            development (Android apps), although, I haven't looked into it all
            that much.
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
              <span className="project__name">
                Discord Timestamp Generator (<em>WIP</em>)
              </span>
              <span className="project__desc">
                A simple timestamp generator for the less tech savy ones.
              </span>

              <span className="learn-more">
                Learn More
                <FaArrowRight />
              </span>
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
            <a href="https://t.me/tazwastaken" rel="noreferrer" target="_blank">
              <div className="contact">
                <FaTelegramPlane />
                Telegram <span className="username">(@tazwastaken)</span>
              </div>
            </a>
            <a href="">
              <div className="contact">
                <FaEnvelope />
                Email{" "}
                <span className="username">(tazdev.yy@gmail.com)</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
