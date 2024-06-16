import React, { useState } from "react";
import "./HomeCircleCard.css";

const HomeCircleCard = ({ homeCircleData }) => {
  const [showFullDescriptions, setShowFullDescriptions] = useState(
    homeCircleData.map(() => false)
  );

  const toggleDescription = (index) => {
    const newShowFullDescriptions = [...showFullDescriptions];
    newShowFullDescriptions[index] = !newShowFullDescriptions[index];
    setShowFullDescriptions(newShowFullDescriptions);
  };

  return (
    <>
      <section className="main-circle-card--cointainer">
        {homeCircleData.map((curElem, index) => {
          const { name, image, description } = curElem;

          return (
            <div key={name} className="card-container">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description color_lg">
                    {showFullDescriptions[index]
                      ? description
                      : `${description.slice(0, 190)}...`}
                  </span>
                  <div
                    className="card-more"
                    onClick={() => toggleDescription(index)}
                  >
                    {showFullDescriptions[index] ? " less" : " more"}
                  </div>
                </div>
                <img
                  src={image}
                  alt="images"
                  className="card-media img_circle"
                />
                <div className="btn_new">
                  <button className="btn_medium">Explore </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HomeCircleCard;
