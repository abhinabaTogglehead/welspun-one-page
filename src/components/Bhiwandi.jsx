import React from "react";
import "./Bhiwandi.scss";
import SidebarSection from "./SidebarSection";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaTwitter, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

// import required modules
import { Pagination } from "swiper/modules";
function Bhiwandi() {
  return (
    <div className="bhiwandi-container">
      <SidebarSection />
      <div className="bhiwandi">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bhiwandi-card">
              <div className="bhiwandi-img-container">
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <h3 className="bhiwandi-name poppins-semibold">ADURAYEMI LOVE</h3>
              <h3 className="bhiwandi-title poppins-bold">PRODUCT DESIGN</h3>
              <p className="bhiwandi-text">
                Product design as the architech of technology is an awesome
                skill that helps to profer solutions in the technology space and
                as a blockchain enthusiast I believe this skill with the help of
                this will enable me position myself for jobs and able to profer
                solution in the blockchain space
              </p>
              <button className="bhiwandi-button poppins-bold">
                aduralove1@gmail.com
              </button>{" "}
              <br />
              <button className="bhiwandi-button poppins-bold">
                +2348106651665
              </button>
              <div className="bhiwandi-line-icon">
                <FaTwitter />
                <FaInstagramSquare />
                <FaBasketball />
                <FaLinkedinIn />
                <FaGithub />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second-bhiwandi">
              <img src="https://picsum.photos/200" alt="slide2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Bhiwandi;
