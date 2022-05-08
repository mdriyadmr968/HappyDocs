import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

import image1 from "../../Images/doc1.jpg"
import image2 from "../../Images/doc2.jpg"
import image3 from "../../Images/doc3.jpg"

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
              src={image2}
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
              src={image3}
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
      </div>
    );
};

export default Banner;