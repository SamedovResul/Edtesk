import React from "react";
import Card1 from "../../../assets/coming1.jpg"

const SectionOne = () => {
    const cardsData=[
        {id:1,text:"Digital Agency 01",content:"Digital Agency, Miniaml Agency, Marketing Agency",img:Card1},
        {id:2,text:"Digital Agency 01",content:"Digital Agency, Miniaml Agency, Marketing Agency",img:Card1},
        {id:3,text:"Digital Agency 01",content:"Digital Agency, Miniaml Agency, Marketing Agency",img:Card1},
        {id:4,text:"Digital Agency 01",content:"Digital Agency, Miniaml Agency, Marketing Agency",img:Card1},
        {id:5,text:"Digital Agency 01",content:"Digital Agency, Miniaml Agency, Marketing Agency",img:Card1},
        {id:6,text:"Digital Agency 01",content:"Digital Agency, Miniaml Agency, Marketing Agency",img:Card1},
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="demo-header">
          <h2>50+ Stunning and Unique Demos</h2>
          <ul>
            <li>ALL</li>
            <li>IT SOLUTION</li>
            <li>BUSINESS</li>
            <li>AGENCY</li>
            <li>NEW DEMO</li>
            <li>STARTUP</li>
            <li>CONSULTING</li>
            <li>FINANCE</li>
            <li>STARTUP</li>
            <li>CONSULTING</li>
            <li>FINANCE</li>
          </ul>
        </div>
        <div className="demo-cards">
            {cardsData.map(card=>(
                <div key={card.id} className="card-container">
                    <img src={card.img} alt="/" />
                    <p>{card.text}</p>
                    <span>{card.content}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
