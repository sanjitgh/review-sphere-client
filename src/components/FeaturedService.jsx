import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const FeaturedService = () => {
  const [service, setService] = useState([]);

  // get service data from db
  useEffect(() => {
    axios.get("http://localhost:5000/featuredService").then((res) => {
      setService(res.data);
    });
  }, []);
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-center font-bold mb-16 text-2xl md:text-5xl">
          Featured Service
        </h1>
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
