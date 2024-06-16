// PackageDetails.js
import React from "react";
import "./Package.css";
import { FaStar } from "react-icons/fa";

const PackageDetails = ({
  title,
  description,
  image,
  price,
  duration,
  rating,
  onBook,
}) => {
  return (
    <div className="package-details-container">
      <h1></h1>
      <div className="package-details">
        <img className="package-image" src={image} alt={title} />
        <div className="package-info">
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <div className="additional-info">
            <p className="price">Price: ${price}</p>
            <p className="duration">Duration: {duration} days</p>
            <div className="rating">
              <p>Rating:</p>
              {Array.from({ length: rating }, (_, index) => (
                <FaStar key={index} className="star" />
              ))}
            </div>
          </div>
          <button className="book-button" onClick={onBook}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
