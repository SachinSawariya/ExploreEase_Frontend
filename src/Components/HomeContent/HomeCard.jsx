import React, { useState } from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";

const HomeCard = ({ homeData }) => {
  const [showFullDescriptions, setShowFullDescriptions] = useState(
    homeData.map(() => false)
  );

  const toggleDescription = (index) => {
    const newShowFullDescriptions = [...showFullDescriptions];
    newShowFullDescriptions[index] = !newShowFullDescriptions[index];
    setShowFullDescriptions(newShowFullDescriptions);
  };

  return (
    <>
      <section className="main-card--cointainer">
        {homeData.map((curElem, index) => {
          const { id, name, image, description } = curElem;

          return (
            <>
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
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
                  <img src={image} alt="images" className="card-media" />
                  <div className="btn_new">
                    <button className="btn_medium">
                      <Link to={`/exploredes/${id}`}>Explore</Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default HomeCard;
