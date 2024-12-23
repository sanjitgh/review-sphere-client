import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import MyServiceCard from "../components/MyServiceCard";


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

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-center font-bold text-2xl md:text-5xl mb-16">
          My Services
        </h1>
        <div>
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
                  ></MyServiceCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
