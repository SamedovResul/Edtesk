import React from "react";
import Card1 from "../../../assets/first.png"
import img1 from '../../../assets/image0.png'
import img2 from '../../../assets/image1.png'
import img3 from '../../../assets/image2.png'

const SectionOne = () => {
    const cardsData=[
        {id:1,text:"Enteskedu",content:"Digital Agency",img:img1,link:"https://www.instagram.com/p/C1em6UiIjTg/?igsh=MXVsaTJodW1hOXAyZA=="},
        {id:2,text:"Enteskedu",content:"Digital Agency",img:img2,link:"https://www.instagram.com/p/C1Z5ov_I9v7/?igsh=MTFtdG41N3BrZTY2bA=="},
        {id:3,text:"Enteskedu",content:"Digital Agency",img:img3,link:"https://www.instagram.com/p/C1BtlWRALxw/?igsh=MWJ3aTUybXlyNnU4NA=="},
        // {id:4,text:"Enteskedu",content:"Digital Agency",img:Card1,link:"https://www.instagram.com/p/C0yYRbagANI/?igsh=dDN1Nm05dXJobmJ0"},
        // {id:5,text:"Enteskedu",content:"Digital Agency",img:Card1,link:"https://www.instagram.com/p/C1Z5ov_I9v7/?igsh=MTFtdG41N3BrZTY2bA=="},
        // {id:6,text:"Enteskedu",content:"Digital Agency",img:Card1,link:"https://www.instagram.com/p/C1BtlWRALxw/?igsh=MWJ3aTUybXlyNnU4NA=="},
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="demo-header">
          <h2>Some of our project</h2>
        </div>
        <div className="demo-cards">
            {cardsData.map(card=>(
                <div key={card.id} className="card-container">
                  <a  href={card.link}  >
                    <img src={card.img} alt="/" />
                  </a>
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
