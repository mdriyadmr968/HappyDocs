import React from "react";
import "./ClientsSay.css";
import client1 from "../../Images/client1.jpg";
import client2 from "../../Images/client2.jpg";
import client3 from "../../Images/client3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna } from "@fortawesome/free-solid-svg-icons";

const ClientsSay = () => {
  return (
    <div className="client-div">
      <h1 className="text-center ourservice ">
        <span className="our">Our</span>{" "}
        <span className="services">Clients</span>{" "}
        <span className="our">Say</span>
        <div>
          <FontAwesomeIcon icon={faDna} className="dna" />
        </div>
        <h5 className="service-des">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </h5>
      </h1>
      <div className="all-card">
        <div className="cards" style={{ width: "20rem", height: "30rem" }}>
          <div className="card-body">
            <img className="client-image" src={client1} alt="" />
            <h5 className="card-title m-4">Lara Crown</h5>
            <h6 className="card-subtitle mb-4  text-muted">Sale Manager</h6>
            <p className="card-text px-4">
              <i>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                exercitationem aut sit. Harum magnam sed dicta veniam quidem
                neque perferendis?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Molestias similique vel sed 
              </i>
            </p>
          </div>
        </div>
        <div className="cards" style={{ width: "20rem", height: "30rem" }}>
          <div className="card-body">
            <img className="client-image" src={client2} alt="" />
            <h5 className="card-title m-4">Jason Momoa</h5>
            <h6 className="card-subtitle mb-4  text-muted">Actor</h6>
            <p className="card-text px-4">
              <i>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                exercitationem aut sit. Harum magnam sed dicta veniam quidem
                neque perferendis?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Molestias similique vel sed 
              </i>
            </p>
          </div>
        </div>
        <div className="cards" style={{ width: "20rem", height: "30rem" }}>
          <div className="card-body">
            <img className="client-image" src={client3} alt="" />
            <h5 className="card-title m-4">Lara Croft</h5>
            <h6 className="card-subtitle mb-4  text-muted">Gamer</h6>
            <p className="card-text px-4">
              <i>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                exercitationem aut sit. Harum magnam sed dicta veniam quidem
                neque perferendis?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Molestias similique vel sed 
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
