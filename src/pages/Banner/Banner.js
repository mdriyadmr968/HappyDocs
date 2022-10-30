import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import image1 from "../../Images/doc1.jpg";
import image2 from "../../Images/bg1.jpg";
import image3 from "../../Images/bg24.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div>
      <Carousel fade={true} pause={false} className="Carousel-container">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>We do our best for you and your health.</h1>
            <p>
              High professional doctors level. All specialists have extensive
              practical experience and training courses.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>Correct diagnosis is half the success.</h1>
            <p>
              Deeper appreciation and concern for our client's investments and
              the human experience.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>We care and protect your health</h1>
            <p>
              Only modern and best equipment advanced medical technologies and
              innovative diagnosis.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="banner-bottom-container">
        <div className="banner-bottom-card">
          <div className="banner-bottom-cards-icon">
            <FontAwesomeIcon icon={faTruckMedical} />
          </div>
          <div className="banner-bottom-cards-text">
            <h4 className="banner-service-header">24 Hours Service</h4>
            <p className="banner-service-discription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              accusamus.
            </p>
          </div>
        </div>
        <div className="banner-bottom-card2">
          <div className="banner-bottom-cards-icon">
            <FontAwesomeIcon icon={faTruckMedical} />
          </div>
          <div className="banner-bottom-cards-text">
            <h4 className="banner-service-header">24 Hours Service</h4>
            <p className="banner-service-discription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              accusamus.
            </p>
          </div>
        </div>
        <div className="banner-bottom-card">
          <div className="banner-bottom-cards-icon">
            <FontAwesomeIcon icon={faTruckMedical} />
          </div>
          <div className="banner-bottom-cards-text">
            <h4 className="banner-service-header">24 Hours Service</h4>
            <p className="banner-service-discription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              accusamus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
