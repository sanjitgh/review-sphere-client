import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Input, Option, Select } from "@material-tailwind/react";

const Services = () => {
  const [service, setService] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Services | ReviewSphere";
    // get service data from db
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/services?filter=${filter}&search=${search}`,
       
      );
      setService(data);
    };
    fetchAllServices();
  }, [filter, search]);

  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-2">
          <h1 className="text-center font-bold text-3xl md:text-5xl mb-8">
            All Services
          </h1>
          <div className="sm:flex justify-end items-center gap-10 mb-10 ">
            <div className="sm:w-3/12 w-full mb-5 md:mb-0">
              <Select
                onChange={(e) => setFilter(e)}
                variant="standard"
                color="green"
                label="Category"
              >
                <Option value="">ALL</Option>
                <Option value="Tech">Tech</Option>
                <Option value="Science">Science</Option>
                <Option value="Natures">Natures</Option>
                <Option value="Travel">Travel</Option>
              </Select>
            </div>
            <div className="sm:w-3/12 w-full">
              <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                variant="standard"
                label="Serarch"
                placeholder="Serarch By Title"
                color="green"
              />
            </div>
          </div>
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
