import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ClientsSay from "../ClientsSay/ClientsSay";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <About></About>
        <ClientsSay></ClientsSay>
    </div>
  );
};

export default Home;
