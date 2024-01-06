import React from "react";
import DesignImg from "../../../assets/first.png"

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="container">
        <div className="design-container">
          <div className="design-context">
            <h4>Ən yaxşı UI/UX</h4>
            <h2> Bazar tələbinə uyğun innovativ dizayn </h2>
            <div className="design-content">
              <h5> Müştəri tələbi </h5>
              <p>
                İlk öncə müştəri tələbini diqqətlə dinləyirik.
              </p>
            </div>
            <div className="design-content">
              <h5> Unikal təklif  </h5>
              <p>
                Daha sonra tələbə uyğun  özəl və unikal həll təklif edirik.
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
