import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);

  // get service data from db
  useEffect(() => {
    document.title = "Services | ReviewSphere";
    axios.get("http://localhost:5000/services").then((res) => {
      setService(res.data);
    });
  }, []);

  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-2">
          <h1 className="text-center font-bold text-3xl md:text-5xl mb-16">
            All Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {service.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
