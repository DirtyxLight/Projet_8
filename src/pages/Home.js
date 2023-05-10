import React from "react";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div id="home__page">
      <Navigation image="homeBanner" source="./assets/home-banner.png" />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
