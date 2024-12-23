import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/SQvLvFW/man-browsing-dvds-stockcake.webp')] bg-center bg-cover bg-no-repeat min-h-[800px] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
            <div className="z-10 text-white dark:text-gray-200 text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5">
                Make Informed Decisions
              </h1>
              <p className="text-gray-300 max-w-[800px] mx-auto">
                Browse through detailed and authentic service reviews to ensure
                you choose the best options that perfectly suit your needs,
                preferences, and budget.
              </p>

              <button className="btn bg-green-600 hover:bg-green-700 border-none text-white mt-8 rounded-none">
                Start Exploring
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/zGXbCqG/digital-workplace-evolution-stockcake.webp')] bg-center bg-cover bg-no-repeat min-h-[800px] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
            <div className="z-10 text-white dark:text-gray-200 text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5">
                Join Our Community
              </h1>
              <p className="text-gray-300 max-w-[800px] mx-auto">
                Become part of a growing network of users who rely on real
                reviews from real people to make smarter choices for service
                providers across various industries.
              </p>

              <button className="btn bg-green-600 hover:bg-green-700 border-none text-white mt-8 rounded-none">
                Get Started Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/k2TGddP/future-trading-floor-stockcake.webp')] bg-center bg-cover bg-no-repeat min-h-[800px] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
            <div className="z-10 text-white dark:text-gray-200 text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5">
                Your Voice Matters
              </h1>
              <p className="text-gray-300 max-w-[800px] mx-auto">
                By sharing your personal experiences and honest feedback, you
                contribute to a trusted community that helps others make
                confident decisions when choosing services.
              </p>

              <button className="btn bg-green-600 hover:bg-green-700 border-none text-white mt-8 rounded-none">
                Write a Review
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
