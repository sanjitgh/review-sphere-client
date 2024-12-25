import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@material-tailwind/react";
import { motion } from "motion/react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

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
              <motion.div
                animate={{ y: [0, 30, 30, 0] }}
                transition={{
                  duration: 4,
                  delay: 0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Button className="bg-green-500 py-4 hover:bg-green-600 rounded-none mt-6" variant="filled">
                  <span className="flex items-center gap-2">
                    Start Exploring
                    <MdOutlineKeyboardDoubleArrowDown />
                  </span>
                </Button>
              </motion.div>
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
              <motion.div
                animate={{ y: [0, 30, 30, 0] }}
                transition={{
                  duration: 4,
                  delay: 0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Button className="bg-green-500 py-4 hover:bg-green-600 rounded-none mt-6" variant="filled">
                  <span className="flex items-center gap-2">
                    Get Started Now
                    <MdOutlineKeyboardDoubleArrowDown />
                  </span>
                </Button>
              </motion.div>
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
              <motion.div
                animate={{ y: [0, 30, 30, 0] }}
                transition={{
                  duration: 4,
                  delay: 0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Button className="bg-green-500 py-4 hover:bg-green-600 rounded-none mt-6" variant="filled">
                  <span className="flex items-center gap-2">
                    Write a Review
                    <MdOutlineKeyboardDoubleArrowDown />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
