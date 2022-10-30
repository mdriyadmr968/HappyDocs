import { faDna } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Services/Service";
import "./Services.css";

const Services = () => {
  const [serv, setServ] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServ(data));
  }, []);
  return (
    <div style={{ backgroundColor: "whitesmoke", paddingBottom: "10%" }}>
      <h1 className="text-center ourservice ">
        <span className="our">Our</span>{" "}
        <span className="services">Services</span>
        <div>
          <FontAwesomeIcon icon={faDna} className="dna" />
        </div>
        <h5 className="service-des">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </h5>
      </h1>

      <Container className="">
        <Row className="gy-5">
          {serv.map((service) => (
            <Col xs={12} sm={12} md={4}>
              <Service service={service} key={service.name}></Service>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
