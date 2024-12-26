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
    axios.get("http://localhost:5000/services").then((res) => {
      setService(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => {
      setreviews(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setusers(res.data);
    });
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1">
            <img src={image} alt="Business" className="w-full md:w-4/5" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center mb-10">
              {/* card */}
              <div className="border w-full shadow-lg shadow-green-50 h-fit py-10 px-5 text-center">
                <div ref={ref} className="text-3xl font-bold text-green-500">
                  {inView && (
                    <CountUp start={0} end={service?.length} duration={10} />
                  )}
                </div>
                <p className="mt-2 text-gray-600">Services</p>
              </div>
              {/* card */}
              <div className="border w-full shadow-lg shadow-green-50 h-fit py-10 px-5 text-center">
                <div ref={ref} className="text-3xl font-bold text-green-500">
                  {inView && (
                    <CountUp start={0} end={reviews?.length} duration={10} />
                  )}
                </div>
                <p className="mt-2 text-gray-600">All Review</p>
              </div>
              {/* card */}
              <div className="border w-full shadow-lg shadow-green-50 h-fit py-10 px-5 text-center">
                <div ref={ref} className="text-3xl font-bold text-green-500">
                  {inView && (
                    <CountUp start={0} end={users?.length} duration={10} />
                  )}
                </div>
                <p className="mt-2 text-gray-600">Total Users</p>
              </div>
            </div>
            <p>
              At ReviewSphere success is measured by trust, quality, and impact.
              We've achieved countless milestones, served satisfied clients, and
              received prestigious accolades. Our passionate team delivers
              unmatched results, creating lasting value and exceeding
              expectations with every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
