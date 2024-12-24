import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import MyServiceCard from "../components/MyServiceCard";
import { Input } from "@material-tailwind/react";

const MyService = () => {
  const [service, setService] = useState([]);
  const { user } = useAuth();

  // get my service data from db by email
  useEffect(() => {
    document.title = "My Service | ReviewSphere";
    axios
      .get(`http://localhost:5000/service?email=${user?.email}`)
      .then((res) => {
        setService(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    setService((prevService) =>
      prevService.filter((service) => service._id !== id)
    );
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2 min-h-[80vh]">
        <h1 className="text-center font-bold text-2xl md:text-5xl mb-16">
          My Services
        </h1>
        {service.length > 0 ? (
          <div>
            <div className="flex justify-center mb-5">
              <div className="w-72">
                <Input label="Search" />
              </div>
            </div>
            <div className="overflow-x-auto border shadow-lg shadow-green-50">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Company Name</th>
                    <th>Title</th>
                    <th>Website</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {service.map((service) => (
                    <MyServiceCard
                      key={service._id}
                      service={service}
                      onDelete={handleDelete}
                    ></MyServiceCard>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center text-2xl font-semibold">No Service Found</p>
        )}
      </div>
    </div>
  );
};

export default MyService;
