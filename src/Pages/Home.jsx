import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Price from "../components/Price";
import Base from "../components/Base";

const Home = () => {
  return (
    <div className="ease-in duration-300">
      <Navbar />
      <Hero />
      <Price />
      <Base />
    </div>
  );
};

export default Home;
