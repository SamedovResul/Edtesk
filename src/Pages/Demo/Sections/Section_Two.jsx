import React from "react";
import DesignImg from "../../../assets/first.png"

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="container">
        <div className="design-container">
          <div className="design-context">
            <h4>BEST UI/UX</h4>
            <h2>No Compromising With Quality</h2>
            <div className="design-content">
              <h5>Elevating Experiences</h5>
              <p>
                Unmatched UI/UX Design with Uncompromising Quality .
              </p>
            </div>
            <div className="design-content">
              <h5>Excellence Redefined</h5>
              <p>
                Unrivaled UI/UX Craftsmanship with a Commitment to Quality
              </p>
            </div>
          </div>
          <div className="design-img">
                <img src={DesignImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
