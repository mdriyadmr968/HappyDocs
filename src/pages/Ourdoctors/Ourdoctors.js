import { faDna } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img1 from "../../Images/t1.jpg";
import img2 from "../../Images/t2.jpg";
import img3 from "../../Images/t3.jpg";
import img4 from "../../Images/t4.jpg";
import "./Ourdoctors.css";

const Ourdoctors = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke", paddingBottom: "10%" }}>
      <h1 className="text-center ourservice ">
        <span className="our">Our</span>{" "}
        <span className="services">Doctors</span>
        <div>
          <FontAwesomeIcon icon={faDna} className="dna" />
        </div>
        <h5 className="service-des">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </h5>
      </h1>
      <div className="doctors-cards">
        <div>
          <Row className="gy-3">
            <Col xs={6} md={3}>
              <Card className="doctors-card">
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Maria Angel</Card.Title>
                  <Card.Text>Dentist</Card.Text>
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <hr />
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <FontAwesomeIcon icon={faFacebook} className="doc-icon" />
                  <FontAwesomeIcon icon={faInstagram} className="doc-icon" />
                  <FontAwesomeIcon icon={faLinkedin} className="doc-icon" />
                  <FontAwesomeIcon icon={faSkype} className="doc-icon" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="doctors-card">
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Json Jack</Card.Title>
                  <Card.Text>Cardiologist</Card.Text>
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <hr />
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <FontAwesomeIcon icon={faFacebook} className="doc-icon" />
                  <FontAwesomeIcon icon={faInstagram} className="doc-icon" />
                  <FontAwesomeIcon icon={faLinkedin} className="doc-icon" />
                  <FontAwesomeIcon icon={faSkype} className="doc-icon" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="doctors-card">
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>David beckham</Card.Title>
                  <Card.Text>Neurologist</Card.Text>
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <hr />
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <FontAwesomeIcon icon={faFacebook} className="doc-icon" />
                  <FontAwesomeIcon icon={faInstagram} className="doc-icon" />
                  <FontAwesomeIcon icon={faLinkedin} className="doc-icon" />
                  <FontAwesomeIcon icon={faSkype} className="doc-icon" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="doctors-card">
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Jon Snow</Card.Title>
                  <Card.Text>Lord Commandar</Card.Text>
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <hr />
                  <Card.Text>
                    Monday-Friday <span>8.00-17.00</span>
                  </Card.Text>
                  <FontAwesomeIcon icon={faFacebook} className="doc-icon" />
                  <FontAwesomeIcon icon={faInstagram} className="doc-icon" />
                  <FontAwesomeIcon icon={faLinkedin} className="doc-icon" />
                  <FontAwesomeIcon icon={faSkype} className="doc-icon" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Ourdoctors;
