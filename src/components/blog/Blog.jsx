import React from "react";
import "./Blog.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="posts">
      <div className="container blog__container">
        <div className="top-txt ">
          <span className="header">blog()</span>
          <p className="text-light">Random text that makes no sense.</p>
        </div>
        <div className="posts">
          <div className="post">
            <span className="post__name">Hello World!</span>
            <span className="post__desc">
              Hi there! I'm volx, a professional dumbass and a newbie developer.
              And this website is another high school project grade creation of
              mine.
            </span>

            <Link to="/hello-world">
              <span className="read-more">
                Read More
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
