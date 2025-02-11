import React from "react";
import image from "../assest/images/rb_9216.png";
import { Button } from "@material-tailwind/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ImproveBusiness = () => {
  return (
    <div className="py-14 md:py-20 bg-gray-100 dark:bg-blue-gray-900">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image/Visual Content */}
          <div className="md:w-1/2 flex md:justify-start">
            <img
              src={image}
              alt="Business Improvement"
              className="w-full md:w-4/5 dark:grayscale"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300 mb-4 ">
              Improve Your <span className="text-green-600">Business Today</span>
            </h2>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Take your business to the next level with our innovative
              solutions. Empower your team, enhance productivity, and achieve
              your goals with ease.
            </p>
            <Link to={'/services'}>
              <Button
                variant="filled"
                className="flex items-center gap-1 bg-green-600 px-4 py-3 dark:bg-green-800 dark:hover:bg-green-900 rounded"
              >
                Learn More <MdOutlineArrowRightAlt className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveBusiness;
