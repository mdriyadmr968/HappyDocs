import { getAuth } from "firebase/auth";
import React from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import app from "../../firebase.init";
import servicedetail from "./serviceDetail";
const auth = getAuth(app);

const Detail = () => {
  const [user] = useAuthState(auth);
  const { Id } = useParams();
  const totaldesc = servicedetail.find((prod) => prod.id === Id);
  // console.log(totaldesc);

  return (
    <div>
      <Card>
        <Card.Header>post Details:</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>Showing post details for: {Id} </p>
            <footer className="blockquote-footer">
              {totaldesc.description}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
