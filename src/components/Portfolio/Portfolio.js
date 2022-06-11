import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Dashboard from "../../img/dashboard.png";
import Chat from "../../img/chatall.png";
import Social from "../../img/socialmedia.png";
import Ecommerce from "../../img/ecommerce.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
      <img src={Chat} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dashboard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Social} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
