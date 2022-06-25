import React from "react";
import "../Blog.css";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section id="posts">
      <div className="container blog__container">
        <div className="top-txt ">
          <span className="header">Hello World!</span>
          <p className="text-light">Posted on June 22, 2022</p>
        </div>
        <div className="post__content">
          <span className="para">
            Hi there! I'm volx, a professional dumbass and a newbie developer.
            And this website is another <em>high school project grade</em>{" "}
            creation of mine. This website/project was sort of a 'learning
            project' for me to learn and use <strong>ReactJs</strong>; a pretty
            spicy Javascript Library.
          </span>

          <span className="para">
            I might use this site as my main portfolio website, making changes
            along the way. However, if my brain decides to switch to 'no worko'
            mode this site will see no future updates.
          </span>

          <span className="para">
            I plan on adding more features such as a <em>theme switcher</em> to
            this website in the future. Maybe that will keep me from ditching
            the project completely.
          </span>

          <span className="para">
            Anyway, I hope you like the design. I personally prefer it to the
            previous design. Oh and feel free to fire me a DM in case you want
            to rant about how bad this site is or want to provide
            feedback/suggestions.
          </span>

          <span className="para">Till next time gamer :)</span>
        </div>
      </div>
    </section>
  );
};

export default Blog;
