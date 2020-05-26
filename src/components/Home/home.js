import React from "react";
import Navigation from "../Navigation";
import Card from "../Card";

const Home = () => {
  return (
    <div>
      <h1>home component</h1>
      <div>
        <Navigation />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
