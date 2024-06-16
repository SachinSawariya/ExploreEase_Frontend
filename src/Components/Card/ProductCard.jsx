import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ productData }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStars, setSelectedStars] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredProductData, setFilteredProductData] = useState(productData);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    filterProducts(country, selectedStars, selectedCity);
  };

  const handleStarsChange = (e) => {
    const stars = e.target.value;
    setSelectedStars(stars);
    filterProducts(selectedCountry, stars, selectedCity);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    filterProducts(selectedCountry, selectedStars, city);
  };

  const filterProducts = (country, stars, city) => {
    let filteredData = productData;

    if (country !== "") {
      filteredData = filteredData.filter((item) => item.country === country);
    }
    if (stars !== "") {
      filteredData = filteredData.filter(
        (item) => item.star_rating == parseInt(stars)
      );
    }
    if (city !== "") {
      filteredData = filteredData.filter((item) => item.city === city);
    }

    setFilteredProductData(filteredData);
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  const sortedCountries = [
    ...new Set(productData.map((item) => item.country)),
  ].sort();
  const sortedCities = [
    ...new Set(productData.map((item) => item.city)),
  ].sort();

  return (
    <>
      <section id="Product-Container">
        <div className="left-container">
          <div className="left-product">
            <h1 className="filter">Filter By Category</h1>
            <form className="search-hotel">
              <label htmlFor="country" className="hotel-country">
                <h1>Country</h1>
              </label>
              <select
                name="country"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">All</option>
                {sortedCountries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </form>
            <form className="search-hotel">
              <label htmlFor="stars" className="hotel-stars">
                <h1>Stars</h1>
              </label>
              <select
                name="stars"
                id="stars"
                value={selectedStars}
                onChange={handleStarsChange}
              >
                <option value="">All</option>
                {[1, 2, 3, 4, 5].map((stars, index) => (
                  <option key={index} value={stars}>
                    {renderStars(stars)}
                  </option>
                ))}
              </select>
            </form>
            <form className="search-hotel">
              <label htmlFor="city" className="hotel-city">
                <h1>City</h1>
              </label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">All</option>
                {sortedCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div className="product-area">
          {filteredProductData.map((curElem) => {
            const {
              hotel_id,
              photo1,
              hotel_name,
              Price,
              addressline1,
              city,
              checkin,
              checkout,
              state,
              country,
              star_rating,
              rating_average,
              numberrooms,
            } = curElem;

            return (
              <div className="Product-Card" key={hotel_id}>
                <div className="card-img">
                  <img src={photo1} className="hotel-img" alt="image"></img>
                </div>

                <div className="Product-Content">
                  <h2 className="product-name">{hotel_name}</h2>
                  <h3 className="product-location">
                    &#127760; {addressline1}, {city}
                  </h3>
                  <h3 className="product-location">
                    <FontAwesomeIcon icon={faCity} /> {state} {country}
                  </h3>

                  <div className="star-category">
                    {renderStars(star_rating)}
                  </div>
                  <h1 className="Product-Desc">Total Rooms: {numberrooms}</h1>

                  <button type="button" id="" className="btn_book">
                    <Link to={`/hotel/booknow/${hotel_id}`}> Book Now </Link>
                  </button>
                </div>
                <div className="right-side-card">
                  <div className="right-side-info">
                    <h2>
                      <span>Rating Average :</span> {rating_average}
                    </h2>
                    <h2>
                      <span>Check-IN:</span> {checkin}
                    </h2>
                    <h2>
                      <span>Check-OUT:</span> {checkout}
                    </h2>
                    <h2>
                      <span className="price">Price: {Price} </span>
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductCard;
