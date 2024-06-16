import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHotel, faPlane,faTrain,faBus } from '@fortawesome/free-solid-svg-icons';
import hotel from "../Media/hotel.jpg";
import train from "../Media/train.png";
import faq from "../Media/faq.png";
import earth from "../Media/earth.png";

const Header = () => {
  return (
    <>
      <nav id="header">
        <ul>
          <li>
            <img src={hotel} className="icon" alt="hotel" />
            <Link to="/hotel">
              <span className="nav-link">Hotels</span>
            </Link>
          </li>
          <li>
            <img src={earth} className="icon" alt="flight" />
            <Link to="/packages">
              <span className="nav-link">Packages</span>
            </Link>
          </li>
          <li>
            <img src={train} className="icon" alt="train" />
            <Link to="/trains">
              <span className="nav-link"> Trains</span>
            </Link>
          </li>
          <li>
            <img src={faq} className="icon" alt="fqa" />
            <Link to="/faq">
              <span className="nav-link">FAQ's</span>
            </Link>
          </li>
          <li>
            <Link to="/more">
              <span className="nav-link">More Destinations..</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
