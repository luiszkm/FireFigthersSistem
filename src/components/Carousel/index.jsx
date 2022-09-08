import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

//import {api} from "../../services/api"
// import required modules
import { Pagination, Navigation } from "swiper";

export function Carousel({ content }) {
  const cont = <SwiperSlide>{content}</SwiperSlide>

  const [card , setCard] = useState([])
  const [newCard , setNewCard] = useState("")

  async function handleCard() {

    
    for(let i = 0; i < 4; i++) {
      setNewCard(cont)
      setCard(prevState => [...prevState, newCard])
    }
    console.log(newCard);

  }
 
  useEffect(() => {
    handleCard()
  },[])
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4
          },
          1324: {
            slidesPerView: 5,
            spaceBetween: 50,
            slidesPerGroup: 5
          }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
          { 
            newCard
          /* <SwiperSlide 
          >{content}</SwiperSlide> */}
        
        
      </Swiper>
    </>
  );
}
