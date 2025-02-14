import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import image from "../assest/images/rb_5994.png";
import axios from "axios";

const Activity = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [service, setService] = useState([]);
  const [reviews, setreviews] = useState([]);
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("https://review-brown.vercel.app/services").then((res) => {
      setService(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://review-brown.vercel.app/reviews").then((res) => {
      setreviews(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://review-brown.vercel.app/users").then((res) => {
      setusers(res.data);
    });
  }, []);

  return (
    <div className="py-14 md:py-20 dark:bg-blue-gray-800">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center mb-6">
              {/* card */}
              <div className="border w-full shadow-lg shadow-green-50 dark:shadow-blue-gray-700  h-fit py-10 px-5 text-center">
                <div ref={ref} className="text-3xl font-bold text-green-500 dark:text-green-200">
                  {inView && (
                    <CountUp start={0} end={service?.length} duration={10} />
                  )}
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-200">Services</p>
              </div>
              {/* card */}
              <div className="border w-full shadow-lg shadow-green-50 dark:shadow-blue-gray-700 h-fit py-10 px-5 text-center">
                <div ref={ref} className="text-3xl font-bold text-green-500 dark:text-green-200">
                  {inView && (
                    <CountUp start={0} end={reviews?.length} duration={10} />
                  )}
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-200">All Review</p>
              </div>
              {/* card */}
              <div className="border w-full shadow-lg shadow-green-50 dark:shadow-blue-gray-700 h-fit py-10 px-5 text-center">
                <div ref={ref} className="text-3xl font-bold text-green-500 dark:text-green-200">
                  {inView && (
                    <CountUp start={0} end={users?.length} duration={10} />
                  )}
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-200">Total Users</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              At <strong>ReviewSphere</strong> success is measured by trust,
              quality, and impact. We've achieved countless milestones, served
              satisfied clients, and{" "}
              <strong>received prestigious accolades.</strong> Our passionate
              team delivers <strong>unmatched results,</strong> creating lasting
              value and exceeding{" "}
              <strong> expectations with every project.</strong>
            </p>
          </div>
          <div className="col-span-1 flex md:justify-end">
            <img src={image} alt="Business" className="w-full md:w-4/5 dark:grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
