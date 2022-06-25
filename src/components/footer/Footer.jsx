import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer__wrapper ">
        <div className="footer container">
          <span>© taz 2022</span>
          <ul className="social-redirects">
            <li className="social-redirect__github social-redirect divider">
              <a
                href="https://github.com/itstazdev"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="social-redirect__twitter social-redirect ">
              <a href="#" rel="noreferrer" target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
