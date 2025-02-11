import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const FeaturedService = () => {
  const [service, setService] = useState([]);

  // get service data from db
  useEffect(() => {
    axios.get("https://review-brown.vercel.app/featuredService").then((res) => {
      setService(res.data);
    });
  }, []);
  return (
    <div className="py-14 md:py-20 bg-gray-100 dark:bg-blue-gray-900">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-center font-bold text-4xl md:text-5xl dark:text-gray-200">
          Featured Service
        </h1>
        <p className="max-w-xl text-center mx-auto mt-2 mb-12 dark:text-gray-200">
          Discover our top services, offering expert solutions, seamless
          execution, and unmatched quality to meet your needs with excellence
          and innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {service.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
