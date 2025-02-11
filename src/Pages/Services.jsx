import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Breadcrumbs, Input, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SkeletonStyle from "../components/SkeletonStyle";

const Services = () => {
  const [service, setService] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Services | ReviewSphere";

    const fetchAllServices = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://review-brown.vercel.app/services?filter=${filter}&search=${search}`
        );
        setService(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllServices();
  }, [filter, search]);

  return (
    <div className="pb-20 md:pb-14 pt-5 dark:bg-blue-gray-900 min-h-[95vh]">
      <div className="container mx-auto px-2">
        {/* breadCrumb */}
        <div role="presentation" className="mb-5">
          <Breadcrumbs className="bg-transparent">
            <Link className="hover:text-green-700 dark:text-gray-200" to={"/"}>
              Home
            </Link>
            <Link
              className="hover:text-green-700 dark:text-gray-200"
              to={"/services"}
            >
              Services
            </Link>
          </Breadcrumbs>
        </div>

        {/* container */}
        <div className="grid grid-cols-12 gap-5">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-gray-50 px-4 pt-2 pb-7 rounded flex flex-col gap-10 shadow dark:bg-blue-gray-800">
              {/* Search */}
              <div>
                <h1 className="text-lg font-bold text-black mb-1 dark:text-gray-200">
                  Search By Title
                </h1>
                <Input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  variant="standard"
                  label="Search"
                  placeholder="Search By Title"
                  color="green"
                />
              </div>
              {/* Category Filter */}
              <div>
                <h1 className="text-lg font-bold text-black mb-1 dark:text-gray-200">
                  Filter By Category
                </h1>
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
            </div>
          </div>
          {/* Services List */}
          <div className="col-span-12 lg:col-span-8">
            {loading ? (
              <SkeletonStyle />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
