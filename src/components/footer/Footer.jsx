import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer__wrapper ">
        <div className="footer container">
          <span>© vo1x 2022</span>
          <a
            href="https://github.com/vo1x/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="source-code">
              <i className="bi bi-github"></i>Source Code
            </span>
          </a>
          <ul className="social-redirects">
            <li className="social-redirect__github social-redirect divider">
              <a
                href="https://github.com/vo1x"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="social-redirect__discord social-redirect ">
              <a
                href="https://discord.com/users/722727273190391809/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-discord"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
