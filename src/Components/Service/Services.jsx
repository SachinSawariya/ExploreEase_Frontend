import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import hotel1 from "./ServiceImages/hotel1.jpg";
import train1 from "./ServiceImages/train1.jpg";
import hawamahal from "./ServiceImages/hawamahal.jpg";
import banner from "./ServiceImages/banner.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="banner">
        <img src={banner} alt="banner"></img>
      </div>
      <h1 className="service_heading">Explore Our Services</h1>
      <div className="services-grid">
        <div className="service-item">
          <Link to="/hotel">
            <img src={hotel1} alt="Hotels" />
            <div className="service-info">
              <h2>Hotels</h2>
              <p>Find the perfect accommodation for your trip.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/trains">
            <img src={train1} alt="Trains" />
            <div className="service-info">
              <h2>Trains</h2>
              <p>Travel comfortably by booking train tickets.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/packages">
            <img src={hawamahal} alt="Tour Packages" />
            <div className="service-info">
              <h2>Tour Packages</h2>
              <p>Explore exciting tour packages for your next adventure.</p>
            </div>
          </Link>
        </div>
        {/* Add more service items here */}
      </div>
    </div>
  );
};

export default Services;