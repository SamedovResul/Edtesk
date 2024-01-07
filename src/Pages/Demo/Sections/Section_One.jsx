import React from "react";
import img1 from "../../../assets/image0.png";
import img2 from "../../../assets/image1.png";
import img3 from "../../../assets/image2.png";
import img4 from "../../../assets/image3.png";
import img5 from "../../../assets/image4.png";
import img6 from "../../../assets/image5.png";
import img7 from "../../../assets/image6.png";
import img8 from "../../../assets/image7.png";
import img9 from "../../../assets/image8.png";
import img10 from "../../../assets/image9.png";
import img11 from "../../../assets/image10.png";
import img12 from "../../../assets/image11.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const SectionOne = () => {
  const cardsData = [
    {
      id: 1,
      text: "Metatesk VR",
      content: "Digital Agency 1",
      img: img1,
      link: "https://www.instagram.com/p/C1em6UiIjTg/?igsh=MXVsaTJodW1hOXAyZA==",
    },
    {
      id: 2,
      text: "Azirrigation App",
      content: "Digital Agency 2",
      img: img2,
      link: "https://www.instagram.com/p/C1Z5ov_I9v7/?igsh=MTFtdG41N3BrZTY2bA==",
    },
    {
      id: 3,
      text: "Abart Gözəllik",
      content: "Digital Agency 3",
      img: img3,
      link: "https://www.instagram.com/p/C1BtlWRALxw/?igsh=MWJ3aTUybXlyNnU4NA==",
    },
    {
      id: 4,
      text: "Edinify CRM",
      content: "Digital Agency 4",
      img: img4,
      link: "https://www.instagram.com/p/C1em6UiIjTg/?igsh=MXVsaTJodW1hOXAyZA==",
    },
    {
      id: 5,
      text: "Azirrigation Veb",
      content: "Digital Agency 5",
      img: img5,
      link: "https://www.instagram.com/p/C1Z5ov_I9v7/?igsh=MTFtdG41N3BrZTY2bA==",
    },
    {
      id: 6,
      text: "Bağça idarəetmə",
      content: "Digital Agency 6",
      img: img6,
      link: "https://www.instagram.com/p/C1BtlWRALxw/?igsh=MWJ3aTUybXlyNnU4NA==",
    },
    {
      id: 7,
      text: "Corner PlayStation Klub İdarəetmə",
      content: "Digital Agency 7",
      img: img7,
      link: "https://www.instagram.com/p/C1em6UiIjTg/?igsh=MXVsaTJodW1hOXAyZA==",
    },
    {
      id: 8,
      text: "Heyət İdareetmə",
      content: "Digital Agency 8",
      img: img8,
      link: "https://www.instagram.com/p/C1Z5ov_I9v7/?igsh=MTFtdG41N3BrZTY2bA==",
    },
    {
      id: 9,
      text: "Hər növ vebsaytlar",
      content: "Digital Agency 9",
      img: img9,
      link: "https://www.instagram.com/p/C1BtlWRALxw/?igsh=MWJ3aTUybXlyNnU4NA==",
    },
    {
      id: 10,
      text: "Edinify App",
      content: "Digital Agency 10",
      img: img10,
      link: "https://www.instagram.com/p/C1em6UiIjTg/?igsh=MXVsaTJodW1hOXAyZA==",
    },
    {
      id: 11,
      text: "Maliyyə İdarəetmə",
      content: "Digital Agency 11",
      img: img11,
      link: "https://www.instagram.com/p/C1Z5ov_I9v7/?igsh=MTFtdG41N3BrZTY2bA==",
    },
    {
      id: 12,
      text: "Biznes İdarəetmə",
      content: "Digital Agency 12",
      img: img12,
      link: "https://www.instagram.com/p/C1BtlWRALxw/?igsh=MWJ3aTUybXlyNnU4NA==",
    },
  ];
  return (
    <div className="section-one">
      <div className="container">
        <div className="demo-header">
          <h2> Layihələrimizdən və İstiqamətlərimizdən Nümunələr </h2>
        </div>
        <div className="demo-cards">
          <Swiper
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                {" "}
                <div  className="card-container">
                  <a href={card.link}>
                    <img src={card.img} alt="/" />
                  </a>
                  <p>{card.text}</p>
                  {/* <span>{card.content}</span> */}
                </div>{" "}
              </SwiperSlide>
            ))}
            {/* {
            img.map((data) =>{ 
              console.log(data.id)
              return (
                <div key={data.id}>
                <SwiperSlide> <img  style={{width:"40%"}} src={data.img} alt="" /> </SwiperSlide>
                </div>
              )
            })
          } */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
