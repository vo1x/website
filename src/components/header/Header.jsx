import React from "react";
import "./Header.css";
{
  /*
  import { Link } from "react-router-dom";
  */
}

const Header = () => {
  return (
    <div className="container header__container">
      <div className="me__text ">
        <h1 className="user">vo1x</h1>
        <h5 className="text-light user__intro">An aspiring web developer.</h5>
      </div>

      {/* <ol className="nav__menu">
        <Link to="/">
          <li className="nav-item">
            <span className="serial-number">01.</span>
            <span className="page">Home</span>
          </li>
        </Link>
        <Link to="/blog">
          <li className="nav-item">
            <span className="serial-number">02.</span>
            <span className="page">Blog</span>
          </li>
        </Link>
  </ol> */}
    </div>
  );
};
export default Header;
