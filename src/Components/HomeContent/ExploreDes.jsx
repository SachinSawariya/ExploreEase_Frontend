import React from "react";
import "./ExploreDes.css";
import HomeApi from "./HomeApi";
import { useParams } from "react-router-dom";

const ExploreDes = () => {
  const { id } = useParams();
  const explore = HomeApi.find((explore) => explore.id === parseInt(id));

  const { image, image2, name, description, history } = explore;

  return (
    <>
      <section className="explore_container">
        <div className="explore_card">
          <div className="explore_card_wrapper">
            <div className="explore_card_title">
              <h1>{name}</h1>
            </div>
            <div className="explore_card_image">
              <img src={image} alt="image"></img>
              <img src={image2} alt="image"></img>
              <img src={image} alt="image"></img>
            </div>

            <div className="explore_card_description">
              <h1>Summary</h1>
              <p>{description}</p>
            </div>
            <div className="history">
              <h1>History</h1>
              <p>{history}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreDes;
