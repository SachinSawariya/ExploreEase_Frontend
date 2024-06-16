import React, { useState } from "react";
import "./Package.css";
import PackageDetails from "./PackageDetails";
import image1 from "./PackagesImages/Rammandirr.webp";
import image2 from "./PackagesImages/jaipur.webp";
import image3 from "./PackagesImages/goa.jpg";
import image4 from "./PackagesImages/kerala1.jpg";
import image5 from "./PackagesImages/golden3.jpg";

const Packages = () => {
  const [filter, setFilter] = useState("all"); // State to manage the selected filter
  const [searchTerm, setSearchTerm] = useState(""); // State to manage the search term

  const packages = [
    {
      title: "Ram Mandir Tour",
      description:
        "Discover the grandeur of the Ram Mandir, an iconic religious landmark revered by Hindus worldwide, situated in Ayodhya, India. This majestic temple holds profound significance as the birthplace of Lord Ram, a revered deity in Hinduism. Its architecture blends intricate carvings and spiritual symbolism, attracting devotees.",
      image: image1,
      price: "151 ",
      duration: "2",
      rating: 5,
    },
    {
      title: "Jaipur Heritage Tour",
      description:
        "Discover the rich heritage and culture of Jaipur, the Pink City of India, known for its palaces, forts, and vibrant markets.",
      image: image2,
      price: "150 ",
      duration: "2",
      rating: 4,
    },
    {
      title: "Goa Beach Vacation",
      description:
        "Relax and unwind on the beautiful beaches of Goa, India's popular beach destination, known for its sun, sand, and sea.",
      image: image3,
      price: "300 ",
      duration: "3",
      rating: 4,
    },
    {
      title: "Kerala Backwaters Cruise",
      description:
        "Experience the serene backwaters of Kerala aboard a traditional houseboat, surrounded by lush greenery and tranquil waters.",
      image: image4,
      price: "250 ",
      duration: "",
      rating: 2,
    },
    {
      title: "Golden Triangle Tour",
      description:
        "Embark on a journey through Delhi, Agra, and Jaipur, exploring the iconic landmarks and cultural treasures of North India.",
      image: image5,
      price: "400 ",
      duration: "5",
      rating: 1,
    },
  ];

  // Filtering logic based on selected filter
  const filteredPackages = packages.filter((pkg) => {
    if (filter === "all") return true;
    if (filter === "title")
      return pkg.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === "duration") return pkg.duration === searchTerm;
    if (filter === "rating") return pkg.rating.toString() === searchTerm;
  });

  return (
    <div className="package-tour-page">
      <div className="filters">
        <div className="heading_packages">Search your place:</div>

        <div className="filter_data">
          <div className="select">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search Your Place : "
            >
              <option value="all">All</option>
              <option value="title">Title</option>
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="input">
            {filter !== "all" && (
              <input
                type="text"
                placeholder={`Search by ${filter}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="packages-container">
        {filteredPackages.length === 0 ? (
          <div className="result">Result not found</div>
        ) : (
          filteredPackages.map((pkg, index) => (
            <PackageDetails
              key={index}
              title={pkg.title}
              description={pkg.description}
              image={pkg.image}
              price={pkg.price}
              duration={pkg.duration}
              rating={pkg.rating}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Packages;
