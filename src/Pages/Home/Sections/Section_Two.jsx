import React from 'react'
import img1 from "../../../assets/react.png"
import img2 from "../../../assets/nodejs.png"
import img3 from "../../../assets/python.png"
import homeimg from '../../../assets/homeImg.jpg'
import homeimg2 from '../../../assets/homeImg2.jpg'
import homeimg3 from '../../../assets/homeImg3.jpg'

import Cards from './cardData.jsx/cards'


const SectionTwo = () => {
    const cardsData=[
        {id:1,title: <h5>20 +</h5>, desc: <p> Uğurla tamamlanmış layihələr </p> , img:[
            {
                id:10,
                img:homeimg2
            },
        ]},
        {id:2,title: <h5>15 +</h5>,desc: <p> İxtisaslı komanda üzvləri </p> ,img:[
            {
                id:20,
                img:homeimg3
            },
        ]},
        {id:3,title: <h5>30 +</h5>,desc: <p> Yerli və beynəlxalq mükafatlar və nişanlar </p>,img:[
            {
                id:30,
                img:homeimg
            },
        ]},
        {id:4,title: <h5>10 + </h5>,desc:  <p> Texnologiyalar</p> ,img:[
        {
            id:40,
            img:img1
        },
        {
            id:50,
            img:img2
        },
        {
            id:60,
            img:img3
        }
            ]},
    ]
  return (
    <div className='section-two'>
        <div className="container">
            <div className="cards">
                {cardsData.map(card=>(
                    
                    <div key={card.img} className="card">
                        {card.title}
                        {card.desc}
                        {
                        card.img.length > 1 ? 
                        <Cards img={card.img} /> :
                        ( <img src={card.img[0].img} alt="" /> )
                    }
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SectionTwo