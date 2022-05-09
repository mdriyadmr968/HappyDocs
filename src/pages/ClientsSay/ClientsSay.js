import React from "react";
import "./ClientsSay.css";
import client1 from "../../Images/client1.jpg";
import client2 from "../../Images/client2.jpg";
import client3 from "../../Images/client3.jpg";

const ClientsSay = () => {
  return (
    <div className="client-div">
      <div className="ClientsSay-container">
        <h1 style={{ textAlign: "left" }}>Clients Say</h1>
        <hr className="horizontal-row" />
        <h3 style={{ textAlign: "left" }}>Why choose us</h3>
      </div>
      <div className="all-card">
        <div className="cards" style={{ width: "22rem", height: "30rem"}}>
          <div className="card-body">
            <img className="client-image" src={client1} alt="" />
            <h5 className="card-title">Lara Crown</h5>
            <h6 className="card-subtitle mb-2 text-muted">Sale Manager</h6>
            <p className="card-text" style={{ width: "70%", margin: "auto" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              exercitationem aut sit. Harum magnam sed dicta veniam quidem neque
              perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Molestias similique vel sed unde cumque, voluptate .
            </p>
          </div>
        </div>
        <div className="cards" style={{ width: "22rem", height: "30rem" }}>
          <div className="card-body">
            <img className="client-image" src={client2} alt="" />
            <h5 className="card-title">Jerry Small</h5>
            <h6 className="card-subtitle mb-2 text-muted">Director</h6>
            <p className="card-text" style={{ width: "70%", margin: "auto" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              exercitationem aut sit. Harum magnam sed dicta veniam quidem neque
              perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Molestias similique vel sed unde cumque, voluptate .
            </p>
          </div>
        </div>
        <div className="cards" style={{ width: "22rem", height: "30rem" }}>
          <div className="card-body">
            <img className="client-image" src={client3} alt="" />
            <h5 className="card-title">Jessica Dawl</h5>
            <h6 className="card-subtitle mb-2 text-muted">Clients</h6>
            <p className="card-text" style={{ width: "70%", margin: "auto" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              exercitationem aut sit. Harum magnam sed dicta veniam quidem neque
              perferendis?Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Molestias similique vel sed unde cumque, voluptate .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
