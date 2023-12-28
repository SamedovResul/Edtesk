import React from 'react'
import img1 from "../../../assets/react.png"
import img2 from "../../../assets/nodejs.png"
import img3 from "../../../assets/python.png"

import Cards from './cardData.jsx/cards'


const SectionTwo = () => {
    const cardsData=[
        {id:1,title: <h5>20 +</h5>, desc: <p>Successfully <br /> completed projects</p> , img:[]},
        {id:2,title: <h5>30 +</h5>,desc: <p>Our IT team brings their expertise and knowledge to projects to ensure the best possible outcomes.</p> ,img:[]},
        {id:3,title: <h5>3</h5>,desc: <p>Our offices in different cities</p>,img:[]},
        {id:4,title: <h5>Technologies</h5>,desc:"",img:[
        {
            id:1,
            img:img1
        },
        {
            id:2,
            img:img2
        },
        {
            id:3,
            img:img3
        }
            ]},
    ]
  return (
    <div className='section-two'>
        <div className="container">
            <div className="cards">
                {cardsData.map(card=>(
                    
                    <div key={card.id} className="card">
                        {card.title}
                        {card.desc}
                        {card.img.length > 0 && <Cards img={card.img} />}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SectionTwo