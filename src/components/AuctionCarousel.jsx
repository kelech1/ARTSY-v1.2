import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import womansunset from "../assets/sunsetwoman.png";
import lamp from "../assets/lamp.png";
import cloths from "../assets/cloths.png";

// import "./index.css";
import "../index.css";
// import required modules
import { Pagination } from "swiper";

const AuctionCarousel = () => {
  return (
    <>
      <div className="w-11/12 mx-auto md:hidden">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-10 cursor-pointer"
        >
          <SwiperSlide>
            <div className="relative">
              <div className="">
                <img src={womansunset} />
              </div>
              <div className="absolute bottom-10  w-full flex justify-center">
                <div className="text-xl backdrop-blur-lg rounded-lg px-6 py-2 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={lamp} />
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-xl backdrop-blur-lg border border-white rounded-lg px-6 py-2 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={cloths} />
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-xl backdrop-blur-lg border border-white rounded-lg px-6 py-2 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block w-11/12 mx-auto">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          // breakpoints={{
          //   100: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-10 cursor-pointer"
        >
          <SwiperSlide>
            <div className="relative">
              <div className="">
                <img src={womansunset} />
              </div>
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-2xl backdrop-blur-lg border border-white rounded-lg px-8 py-4 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={lamp} />
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-2xl backdrop-blur-lg border border-white rounded-lg px-8 py-4 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={cloths} />
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-2xl backdrop-blur-lg border border-white rounded-lg px-8 py-4 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AuctionCarousel;
