import React from "react";

import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";

import Subscribe from "./Subscribe/Subscribe";
import Trust from "./Trust/Trust";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trust />
      <Pricing />
      <Subscribe />
    </div>
  );
};

export default Home;
