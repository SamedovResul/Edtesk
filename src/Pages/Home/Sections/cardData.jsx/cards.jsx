import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
const cards = ({img}) => {


  // console.log(img)

  return (
    <div  >
        <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        modules={[Autoplay, Pagination, Navigation]} 
        className="mySwiper">
        {
          img.map((data) =>{ 
            console.log(data.id)
            return (
              <div key={data.id}>
              <SwiperSlide> <img  style={{width:"40%"}} src={data.img} alt="" /> </SwiperSlide>
              </div>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default cards