import React from "react";
import Card1 from "../../../assets/first.png"
import Card2 from "../../../assets/second.png"
import Card3 from "../../../assets/third.png"
import Card4 from "../../../assets/fourth.png"
import Card5 from "../../../assets/fiveth.png"
import Card6 from "../../../assets/sixth.png"

const SectionOne = () => {
    const cardsData=[
        {id:1,text:"Enteskedu",content:"Digital Agency",img:Card1},
        {id:2,text:"Enteskedu",content:"Digital Agency",img:Card1},
        {id:3,text:"Enteskedu",content:"Digital Agency",img:Card1},
        {id:4,text:"Enteskedu",content:"Digital Agency",img:Card1},
        {id:5,text:"Enteskedu",content:"Digital Agency",img:Card1},
        {id:6,text:"Enteskedu",content:"Digital Agency",img:Card1},
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
