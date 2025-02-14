import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@material-tailwind/react";
import { motion } from "motion/react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Banner = () => {
  const { user } = useAuth();
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/SQvLvFW/man-browsing-dvds-stockcake.webp')] bg-center bg-cover bg-no-repeat min-h-[calc(100vh-81px)] relative flex justify-center items-center px-3">
            <div className="absolute inset-0 bg-black/50 dark:bg-black/80 flex items-center justify-center"></div>
            <div className="z-10 text-white dark:text-gray-200 text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5 dark:text-gray-300">
                Make Informed Decisions
              </h1>
              <p className="text-gray-300 dark:text-gray-400 max-w-[800px] mx-auto">
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
                <Button
                  className="bg-green-600 py-4 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 rounded mt-6"
                  variant="filled"
                >
                  <span className="flex items-center gap-2">
                    <Link to={"/services"}>Start Exploring</Link>
                    <MdOutlineKeyboardDoubleArrowDown />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/zGXbCqG/digital-workplace-evolution-stockcake.webp')] bg-center bg-cover bg-no-repeat min-h-[calc(100vh-81px)] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 dark:bg-black/80 flex items-center justify-center"></div>
            <div className="z-10 text-white dark:text-gray-200 text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5 dark:text-gray-300">
                Join Our Community
              </h1>
              <p className="text-gray-300 dark:text-gray-400 max-w-[800px] mx-auto">
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
                <Button
                  className="bg-green-600 py-4 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 rounded mt-6"
                  variant="filled"
                >
                  <span className="flex items-center gap-2">
                    <Link to={user ? "/add-service" : "/login"}>
                      Get Started Now
                    </Link>
                    <MdOutlineKeyboardDoubleArrowDown />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/k2TGddP/future-trading-floor-stockcake.webp')] bg-center bg-cover bg-no-repeat min-h-[calc(100vh-81px)] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 dark:bg-black/80 flex items-center justify-center"></div>
            <div className="z-10 text-white dark:text-gray-200 text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5 dark:text-gray-300">
                Your Voice Matters
              </h1>
              <p className="text-gray-300 dark:text-gray-400 max-w-[800px] mx-auto">
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
                <Button
                  className="bg-green-600 py-4 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 rounded mt-6"
                  variant="filled"
                >
                  <span className="flex items-center gap-2">
                    <Link to={"/services"}>Write a Review</Link>
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
