import React from "react";
import "../WorkWith.css";
import img1 from '../../../assets/partnership/img1.jpg'
import img2 from '../../../assets/partnership/img2.jpg'
import img3 from '../../../assets/partnership/img3.jpg'
import img4 from '../../../assets/partnership/img4.webp'
import img5 from '../../../assets/partnership/img5.jpg'
import img6 from '../../../assets/partnership/img6.png'
import img7 from '../../../assets/partnership/img7.gif'
import img8 from '../../../assets/partnership/img8.jpg'
import SupportImg1 from "../../../assets/anowar.jpg"
const SectionOne = () => {
    const supportData=[
        {id:1, logo:img1},
        {id:2, logo:img2},
        {id:3, logo:img3},
        {id:4, logo:img4},
        {id:1, logo:img5},
        {id:2, logo:img6},
        {id:3, logo:img7},
        {id:4, logo:img8}
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
