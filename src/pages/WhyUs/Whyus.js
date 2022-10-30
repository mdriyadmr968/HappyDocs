import { faBed, faCalendarDays, faDna, faHeart, faHeartPulse, faKitMedical, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Whyus.css";

const Whyus = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke", paddingBottom: "10%" }}>
      <h1 className="text-center ourservice ">
        <span className="our">Why</span>{" "}
        <span className="services">Choose</span>
        <span className="our">Us</span>
        <div>
          <FontAwesomeIcon icon={faDna} className="dna" />
        </div>
        <h5 className="service-des">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </h5>
      </h1>
      <div className="whyus-body">
        <div className="whyus-cards">
          <div className="whyus-card">
            <div className="whyus-card-left">
              <span className="whyus-icon">
                <FontAwesomeIcon icon={faKitMedical} />
              </span>
            </div>

            <div className="whyus-card-right">
              <h4>Emergency Care</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                accusamus.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <div className="whyus-card-left">
              <span className="whyus-icon">
                <FontAwesomeIcon icon={faHeartPulse} />
              </span>
            </div>

            <div className="whyus-card-right">
              <h4>Heart Checkup</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                accusamus.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <div className="whyus-card-left">
              <span className="whyus-icon">
                <FontAwesomeIcon icon={faBed} />
              </span>
            </div>

            <div className="whyus-card-right">
              <h4>Operation Theatre</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                accusamus.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <div className="whyus-card-left">
              <span className="whyus-icon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>

            <div className="whyus-card-right">
              <h4>Heart Surgery</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                accusamus.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <div className="whyus-card-left">
              <span className="whyus-icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
            </div>

            <div className="whyus-card-right">
              <h4>Outdoor Checkup</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                accusamus.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <div className="whyus-card-left">
              <span className="whyus-icon">
                <FontAwesomeIcon icon={faSyringe} />
              </span>
            </div>

            <div className="whyus-card-right">
              <h4>Pharmacy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
