import React from "react";
import "../feature.css";
import HTMLImg from "../../../assets/f14.png"
import CSSImg from "../../../assets/f15.png"
import JSImg from "../../../assets/f16.png"
import RESPONSIVEImg from "../../../assets/rsp.png"

const SectionOne = () => {
    const cardData=[
        {id:1,title:" Corporate Solutions  ",des:[
          {txt:"Website development for small and large companies."},
          {txt:'ERP solutions for corporate organizations.'}
        ]},
        {id:2,title:"Educational Solutions",des:[
          {txt:"CRM web apps for courses, schools, and kindergartens."},
        ]},
        {id:2,title:"Hospitality Solutions",des:[
          {txt:"CRM web apps for courses, schools, and kindergartens."},
        ]},
        {id:2,title:"Technical Problem Solving",des:[
          {txt:"Emphasize a section or page that highlights your expertise in solving various IT-related technical problems across different industries."},
        ]},
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="feature-header">
          <h5>CORE SOLUTIONS</h5>
          <p>Continuously enhance our IT solutions for diverse businesses by incorporating additional features to meet evolving needs.</p>
        </div>
        <div className="feature-cards">
            {
              cardData.map((data) =>{


                return(
                  <ul key={data.id}>
                    <p> {data.title} </p>
                    {
                      data.des.map((des,i) =>{
                        return(
                          <li key={i}> {des.txt} </li>
                          )
                        })
                    }
                  </ul>
                )
              })
            }
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
