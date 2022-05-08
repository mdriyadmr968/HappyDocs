import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <About></About>
        <Footer></Footer>

    </div>
  );
};

export default Home;
