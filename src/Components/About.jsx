// About.js

import React from "react";
import "./About.css";
import image1 from "../Media/image1.jpg";
import image2 from "../Media/image2.jpg";
import image3 from "../Media/image3.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <div className="text">
          <div className="about_head-des">
            <h2>About ExploreEase</h2>
            <p>
              Welcome to ExploreEase, your go-to platform for seamless travel
              and accommodation experiences. Whether you're a globetrotter or a
              business traveler, we've got you covered with our extensive
              network of partners and user-friendly features.Our mission is to
              make your travel planning and accommodation booking process
              hassle-free. With ExploreEase, you can discover amazing
              destinations, find the perfect place to stay, and create
              unforgettable memories.
            </p>
            <p>
              ExploreEase is built with love and dedication by a team of travel
              enthusiasts who understand the importance of a smooth and
              enjoyable journey. We are committed to providing you with the best
              travel and accommodation solutions, ensuring your adventures are
              stress-free and enjoyable. Welcome to ExploreEase, your go-to
              platform for seamless travel and accommodation experiences.
              Whether you're a globetrotter or a business traveler, we've got
              you covered with our extensive network of partners and
              user-friendly features.
            </p>
            <p>
              Our mission is to make your travel planning and accommodation
              booking process hassle-free. With ExploreEase, you can discover
              amazing destinations, find the perfect place to stay, and create
              unforgettable memories. ExploreEase is built with love and
              dedication by a team of travel enthusiasts who understand the
              importance of a smooth and enjoyable journey. We are committed to
              providing you with the best travel and accommodation solutions,
              ensuring your adventures are stress-free and enjoyable.
            </p>

            <p>
              The site features several ancient Buddhist monuments, including
              the Dhamek Stupa, which is believed to mark the spot where the
              Buddha gave his sermon. The stupa stands tall as a symbol of
              Buddhist faith and attracts pilgrims and tourists alike.
              Additionally, the Ashoka Pillar at Sarnath, erected by Emperor
              Ashoka in the 3rd century BCE, bears inscriptions indicating
              Ashoka's commitment to the principles of Buddhism and his efforts
              to spread the teachings of Gautama Buddha. Sarnath remains an
              important pilgrimage site and a center for Buddhist studies and
              meditation, drawing visitors from all over the world.
            </p>
            <p>
              The Kerala backwaters, a network of interconnected canals, rivers,
              lakes, and lagoons stretching along the coast of Kerala in South
              India, offer a mesmerizing and tranquil experience unlike any
              other. Embarking on a journey through the backwaters, particularly
              in regions like Alleppey (Alappuzha) and Kumarakom, presents an
              enchanting landscape of lush greenery, swaying palm trees, and
              quaint villages lining the waterways. The highlight of exploring
              the backwaters is undoubtedly the houseboat cruise, where visitors
              can relax and unwind while drifting along the serene waters. These
              traditional houseboats, known as 'kettuvallams', are equipped with
              modern amenities, offering a comfortable and immersive experience
              amidst nature's bounty.
            </p>
            <p>
              As one meanders through the backwaters, glimpses of daily life
              unfold – fishermen casting their nets, villagers washing clothes
              by the banks, and children playing along the water's edge. Sunsets
              over the backwaters paint a picturesque scene. after the journey
              concludes.
            </p>
            <p>
              Thank you for choosing ExploreEase. Let's embark on a journey of
              discovery and comfort together!
            </p>
          </div>
        </div>
        <span className="border_about"></span>
        <div className="image">
          <img
            src={image1} // Replace with your actual image URL
            alt="ExploreEase Logo"
          />
          <img
            src={image3} // Replace with your actual image URL
            alt="ExploreEase Logo"
          />
          <img
            src={image2} // Replace with your actual image URL
            alt="ExploreEase Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;