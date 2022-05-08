
import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Services.css'

const Service = ({ service }) => {
  const { name, img, id } = service;

  return (
    <div>
      <Card style={{ width: "18rem", height:"20rem", margin: "5%"}}>
        <Card.Img variant="top" src={img}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Link to={`/details/${id}`}>
            <button className=" btn btn-primary">Read More</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;