import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import MyServiceCard from "../components/MyServiceCard";
import { Input } from "@material-tailwind/react";
import useAxiosSecure from "../hook/UseAxiosSecure";
import Skeleton from "react-loading-skeleton";

const MyService = () => {
  const axiosSecure = useAxiosSecure();
  const [service, setService] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  // get my service data from db by email
  useEffect(() => {
    document.title = "My Service | ReviewSphere";
    setLoading(true);

    const fetchMyService = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/service?email=${user?.email}&search=${search}`
        );
        setService(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyService();
  }, [search]);

  const handleDelete = (id) => {
    setService((prevService) =>
      prevService.filter((service) => service._id !== id)
    );
  };

  return (
    <div className="py-10 md:pb-20 md:pt-5 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2 min-h-[80vh]">
        <div>
          <div className="flex justify-end mb-5">
            <div className="w-72 ">
              <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                variant="standard"
                label="Search"
                placeholder="Search By Title"
                color="green"
              />
            </div>
          </div>
          <div className="overflow-x-auto border shadow-lg shadow-green-50">
            {loading ? (
              <div >
                <Skeleton height={30} count={10}></Skeleton>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
