import React from "react";
import Banner from "../Banner/Banner";
import ClientsSay from "../ClientsSay/ClientsSay";
import Contact from "../Contact/Contact";
import Latestnews from "../Latestnews/Latestnews";
import Ourdoctors from "../Ourdoctors/Ourdoctors";
import Services from "../Services/Services";
import Whyus from "../WhyUs/Whyus";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <Whyus></Whyus>
        <Ourdoctors></Ourdoctors>
        <Latestnews></Latestnews>
        <ClientsSay></ClientsSay>
        <Contact></Contact>
    </div>
  );
};

export default Home;
