import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router";
const Crousel = ({ arr }) => {
  const navigate= useNavigate()
  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        autoplay={{ delay: 5500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          220: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 35,
          },

          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {/* https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixi60d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 */}
        {arr &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <img  style={{cursor:'pointer'}} src={item} alt={index} onClick={()=> navigate('/products')} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Crousel;
