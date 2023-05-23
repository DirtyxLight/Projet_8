import React from "react";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div id="home__page">
      <Navigation bannerDisplay={false} source="./assets/home-banner.png" />
      <Banner source="./assets/home-banner.png" />

      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
