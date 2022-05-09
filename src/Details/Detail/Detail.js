import { getAuth } from "firebase/auth";
import React from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import app from "../../firebase.init";
import servicedetail from "./serviceDetail";
import './Detail.css'
const auth = getAuth(app);

const Detail = () => {
  const [user] = useAuthState(auth);
  const { Id } = useParams();
  const singleProduct = servicedetail.find((prod) => prod.id === Id);
  // console.log(totaldesc);

  return (
    <div className="detailcontainer">
      <div className="row detailRow">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <img className="detailImage" src={singleProduct.img} alt="" />
              <h5 className="card-title"> {singleProduct.name}</h5>
              <p className="card-text description"> {singleProduct.description}</p>
              <a href="/" class="btn btn-warning">
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
