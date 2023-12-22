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
              <h5>Effective UX Design</h5>
              <p>
                All Demos are made with clear, concise, useful, minimal and
                modern design pattern
              </p>
            </div>
            <div className="design-content">
              <h5>Effective UX Design</h5>
              <p>
                All Demos are made with clear, concise, useful, minimal and
                modern design pattern
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
