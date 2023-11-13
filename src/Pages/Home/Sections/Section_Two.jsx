import React from 'react'
import HTMLImg from "../../../assets/f14.png"
import CSSImg from "../../../assets/f15.png"
import JSImg from "../../../assets/f16.png"
import RESPONSIVEImg from "../../../assets/rsp.png"


const SectionTwo = () => {
    const cardsData=[
        {id:1,text:"HTML",img:HTMLImg},
        {id:2,text:"CSS",img:CSSImg},
        {id:3,text:"JQUERY",img:JSImg},
        {id:4,text:"FULLY RESPONSIVE",img:RESPONSIVEImg},
    ]
  return (
    <div className='section-two'>
        <div className="container">
            <div className="cards">
                {cardsData.map(card=>(
                    <div key={card.id} className="card">
                        <img src={card.img} alt="" />
                        <h5>{card.text}</h5>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SectionTwo