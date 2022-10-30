import { faArrowRight, faDna } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Latestnews.css";
import img1 from "../../Images/ws1.jpg";
import img2 from "../../Images/ws2.jpg";
import img3 from "../../Images/ws3.jpg";

const Latestnews = () => {
  return (
    <div className="blogs-container">
      <h1 className="text-center ourservice ">
        <span className="our">Our</span>{" "}
        <span className="services">Latest</span>{" "}
        <span className="our">News</span>
        <div>
          <FontAwesomeIcon icon={faDna} className="dna" />
        </div>
        <h5 className="service-des">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </h5>
      </h1>
      <div className="blogs-cards">
        <Row className="gy-3">
          <Col xs={6} md={4}>
            <Card className="blogs-card">
              <Card.Img variant="top" src={img1} className="blog-img" />
              <Card.Body>
                <Card.Title>Is Running Really Good For Health</Card.Title>

                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  repellat ....
                </Card.Text>
                <button className="btn">
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                  </span>{" "}
                  View Details
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="blogs-card">
              <Card.Img variant="top" src={img2} className="blog-img" />
              <Card.Body>
                <Card.Title>Is Running Really Good For Health</Card.Title>

                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  repellat ....
                </Card.Text>
                <button className="btn">
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                  </span>{" "}
                  View Details
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="blogs-card">
              <Card.Img variant="top" src={img3} className="blog-img" />
              <Card.Body>
                <Card.Title>Is Running Really Good For Health</Card.Title>

                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  repellat ....
                </Card.Text>
                <button className="btn">
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                  </span>{" "}
                  View Details
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Latestnews;
