import React, { useContext, useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import ReviewCard from "../components/ReviewCard";
import useAxiosSecure from "../hook/UseAxiosSecure";
import Skeleton from "react-loading-skeleton";
import { ThemeContext } from "../DarkModeProvaider/DarkModeProvaider";

const MyReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "My Reviews | ReviewSphere";

    const fetchMyReview = async () => {
      try {
        const { data } = await axiosSecure.get(`/review?email=${user?.email}`);
        setReview(data);
      } catch (error) {
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyReview();
  }, [user?.email]);

  const handleDelete = (id) => {
    setReview((prevService) =>
      prevService.filter((service) => service._id !== id)
    );
  };

  return (
    <div className="md:py-20 py-14 bg-gray-50 dark:bg-blue-gray-900">
      <div className="max-w-6xl mx-auto px-2 min-h-[95vh]">
        <p className="mb-4 dark:text-gray-200">
          <span className="font-semibold">Total Review :</span> {review.length}
        </p>
        {loading ? (
          <div>
            {theme === "dark" ? (
              <Skeleton
                baseColor="#37474F"
                highlightColor="#263238"
                className="dark:bg-blue-gray-800"
                height={300}
                count={5}
              >
                :
              </Skeleton>
            ) : (
              <Skeleton height={300} count={5}></Skeleton>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {review.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                onDelete={handleDelete}
              ></ReviewCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReview;
