import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Services/Service';
import './Services.css'


const Services = () => {
  const [serv, setServ] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServ(data));
  }, []);
  return (
    <div style={{ backgroundColor : "whitesmoke"}}>
      <h1 className="text-center ourservice">Our Services</h1>
      <Container className="">
        <Row>
          {serv.map((service) => (
            <Col xs={12} md={4}>
              <Service service={service} key={service.name}></Service>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;