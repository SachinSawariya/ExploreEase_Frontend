import React, { useState } from "react";
import "./BottomContainer.css";
import HomeCard from "./HomeContent/HomeCard";
import HomeMenu from "./HomeContent/HomeApi";
import HomeCircleCard from "./HomeContent/HomeCircleCard";
import HomeCircleMenu from "./HomeContent/HomeCircleApi";
const BottomContainer = () => {
  const [homeData, setHomeData] = useState(HomeMenu);
  const [homeCircleData, setHomeCircleData] = useState(HomeCircleMenu);

  return (
    <>
      <section className="bottom">
        <h1>
          Explore Your<span className="heading_home"> Favorite</span> Places !!
        </h1>
        <HomeCard homeData={homeData} />

        <hr></hr>
        <h1 id="heading2">
          Few More<span className="heading_home"> Destinations </span> to Visit
          !!
          {/* Architectural Marvels !! */}
        </h1>
        <HomeCircleCard homeCircleData={homeCircleData} />
      </section>
    </>
  );
};

export default BottomContainer;
