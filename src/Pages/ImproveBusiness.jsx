import React from "react";
import image from "../assest/images/rb_9216.png";
import { Button } from "@material-tailwind/react";

const ImproveBusiness = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Improve Your Business Today
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Take your business to the next level with our innovative
              solutions. Empower your team, enhance productivity, and achieve
              your goals with ease.
            </p>
            <Button variant="contained" color="primary" size="large" className="bg-green-500">
              Learn More
            </Button>
          </div>

          {/* Image/Visual Content */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Business Improvement"
              className="w-full md:w-4/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveBusiness;
