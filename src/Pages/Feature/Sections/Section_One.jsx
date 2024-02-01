import React from "react";
import "../feature.css";
import logo1 from '../../../assets/technical.png'
import security from '../../../assets/security.png'
import infrastructure from '../../../assets/infrasftructure.png'
import Complicated from '../../../assets/complicatedPro.png'
import webdev from '../../../assets/webdev.png'
import appDev from '../../../assets/appdev.png'
import automotion from '../../../assets/Automation.png'
import startUp from '../../../assets/startUp.png'
import hardware from '../../../assets/hardware.png'

const SectionOne = () => {
    const cardData=[
      {
        desc:"Hər Növ Veb Saytlar",
        img:webdev
      },
      {
        desc:"Mobil Tətbiqlərin Hazırlanması",
        img:appDev
      },
      {
        desc:"Mürəkkəb İdarə Etmə Sistemləri",
        img:Complicated
      },
      {
        desc:"Biznesin Avtomatlaşdırması Sistemləri",
        img:automotion
      },
      {
        desc:"Tam İT İnfrastruktur",
        img:infrastructure
      },
      {
        desc:"Təhlükəsizlik",
        img:security
      },
      {
        desc:"StartUplara Dəstək",
        img:startUp
      },
      {
        desc:"Texniki Dəstək",
        img:logo1
      },
      {
        desc:"Hər Növ Cihazların Hazırlanması",
        img:hardware
      },
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="feature-header">
          <h5>Fəaliyyət İstiqamətlərimiz</h5>
          <p>  </p>
        </div>
        <div className="feature-cards">
            {
              cardData.map((data) =>{
                const {desc,img} = data

                return(
                  <div  key={data.img} >
                    <p> {desc} </p>
                    <img src={img} alt="" />
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
