import React from "react";
import "../support.css";
import SupportImg1 from "../../../assets/anowar.jpg"
const SectionOne = () => {
    const supportData=[
        {id:1,name:"Samadov Rasul",position:" Devops ",img:SupportImg1},
        {id:2,name:"Aytac Ibrahimova",position:" Full-Stack Dev ",img:SupportImg1},
        {id:3,name:" Xeyyam Omarov ",position:"Frontend Dev",img:SupportImg1},
        {id:4,name:" Ceyhun Rasulov ",position:"Full-Stack Dev",img:SupportImg1}
    ]
  return (
    <div className="section-one">
      <div className="container">
        <div className="support-container">
          <div className="support-header">
            <h5>Technical Team</h5>
            <p>Our Dedicated Technical Team For Help You All Time</p>
          </div>
          <div className="support-cards">
            {supportData.map(user=>(
                <div key={user.id}  className="support-card">
                    {/* <img src={user.img} alt="user" /> */}
                    <div className="user-about">
                        <h2>{user.name}</h2>
                        <span>{user.position}</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
