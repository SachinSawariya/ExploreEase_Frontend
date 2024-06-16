import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import "./Carousel.css";
import image1 from "../Media/image1.jpg";
import image2 from "../Media/image2.jpg";
import image3 from "../Media/image3.jpg";
import next from "../Media/right-arrow.png";
import prev from "../Media/left-arrow.png";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description: "",
      icon: image1,
    },
    {
      title: "Walking",
      description: "",
      icon: image2,
    },
    {
      title: "Weights",
      description: "",
      icon: image3,
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3500);
      return () => clearInterval(intervalId);
    }, [activeIndex, items.length]);


  return (
    <div className="carousel">
      <div 
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="arrow-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined"><img src={next} className="next" alt="next"/></span>{" "}
        </button>
        <button
          className="arrow-next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className=""><img src={prev} className="prev" alt="prev"/></span>
        </button>
      </div>
    </div>
  );
};
