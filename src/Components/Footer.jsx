import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../Media/facebook.png";
import Instagram from "../Media/instagram.png";
import GitHub from "../Media/github.png";
import LinkedIn from "../Media/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="a-footer">
        {/* <h2> Social Accounts</h2> */}

        <div className="footer-img">
          <a href="https://www.facebook.com/sachinkumar.kumar.378537"><img src={facebook} /></a>
          <a href="https://www.instagram.com/explore_tech_code/"><img src={Instagram} /></a>
          <a href="https://github.com/ExploreEase-Accomodation/ExploreEase_Effortless-and-Travel-Accommodation"><img src={GitHub} /></a>
          <img src={LinkedIn} />
        </div>
      </div>

      <div className="footer">
        <div className="f-left">
          <p>ExploreEase is a travelling websites </p>
          <p> where you can find many offers to explore the world</p>
        </div>

        <div className="m-left">
          <h3> UseFul links</h3>
          <Link to="/">
            <li> Home </li>
          </Link>
          <Link to="/about">
            <li> About </li>
          </Link>
          <Link to="/services">
            <li> Services </li>
          </Link>
          <Link to="/contact">
            <li> Contact </li>
          </Link>
        </div>

        <div className="m-right">
          <h3> Services.</h3>
          <Link to="/">
            <li> Bus </li>
          </Link>
          <Link to="/">
            <li> Train </li>
          </Link>
          <Link to="/">
            <li> Flight </li>
          </Link>
          <Link to="/">
            <li> More.. </li>
          </Link>
        </div>

        <div className="line"></div>

        <div className="f-right">
          <h3> Contact Us.</h3>

          <div className="contact-content">
            <h5>Developed by.</h5>
            <li>Sachin Kumar</li>
            <li>Abhijeet Kumar</li>
            <li>(+91)- 8434275032 </li>
            <li> exploreeaseproject@gmail.com </li>
            <li> Mohali, Punjab</li>
          </div>
        </div>
      </div>

      <div className="n-footer">
        <p> ©2024 Explore Ease | All rights reserved </p>
      </div>
    </>
  );
};

export default Footer;
