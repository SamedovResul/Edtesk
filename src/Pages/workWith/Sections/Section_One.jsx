import React from "react";
import "../WorkWith.css";
import SupportImg1 from "../../../assets/anowar.jpg"
const SectionOne = () => {
    const supportData=[
        {id:1, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:2, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:3, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:4, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:1, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:2, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:3, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"},
        {id:4, logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeymOOX6DKuOJeN9zmZ4b9vNZapUyPkcWp2xyXabxZYA&s"}
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="support-container">
          <div className="support-header">
            <h5>Uğurlu Əməkdaşlıqlarımız </h5>
          </div>
          <div className="support-cards">
            {supportData.map(user=>(
                <div key={user.id}  className="support-card">
                    <img src={user.logo} alt="user" />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
