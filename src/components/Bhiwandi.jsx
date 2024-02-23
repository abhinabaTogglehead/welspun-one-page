import React from "react";
import "./Bhiwandi.scss";
import SidebarSection from "./SidebarSection";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function Bhiwandi() {
  return (
    <div className="portfolio-summary">
      <SidebarSection />
      <div className="bhiwandi">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Bhiwandi;
