import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Service = ({ service }) => {
  const { name, img, id, description } = service;

  return (
    <div >
      <Card  className="card-container" style={{ width: "18rem", height: "25rem", margin: "auto" }}>
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p className="card-description">{description}</p>
          <Link to={`/details/${id}`}>
            <button type="button" class="btn btn-warning">
              Read More
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
