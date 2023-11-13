import React from "react";
import "../feature.css";
import HTMLImg from "../../../assets/f14.png"
import CSSImg from "../../../assets/f15.png"
import JSImg from "../../../assets/f16.png"
import RESPONSIVEImg from "../../../assets/rsp.png"

const SectionOne = () => {
    const cardData=[
        {id:1,name:"HTML",img:HTMLImg},
        {id:2,name:"HTML",img:CSSImg},
        {id:3,name:"HTML",img:JSImg},
        {id:4,name:"HTML",img:RESPONSIVEImg},
        {id:5,name:"HTML",img:HTMLImg},
        {id:6,name:"HTML",img:HTMLImg},
        {id:7,name:"HTML",img:HTMLImg},
        {id:8,name:"HTML",img:HTMLImg},
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="feature-header">
          <h5>CORE FEATURES</h5>
          <p>Constantly update with New Features.</p>
        </div>
        <div className="feature-cards">
            {cardData.map(card=>(
                <div key={card.id} className="feature-card">
                    <div className="feature-content">
                        <img src={card.img} alt="card" />
                        <span>{card.name}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
