import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import ReviewCard from "../components/ReviewCard";
import useAxiosSecure from "../hook/UseAxiosSecure";
import Skeleton from "react-loading-skeleton";

const MyReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Reviews | ReviewSphere";

    const fetchMyReview = async () => {
      try {
        const { data } = await axiosSecure.get(`/review?email=${user?.email}`);
        setReview(data);
      } catch (error) {
        console.log(error);
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
    <div className="md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2 min-h-[95vh]">
        <p className="mb-4">
          <span className="font-semibold">Total Review :</span> {review.length}
        </p>
        {loading ? (
          <div>
            <Skeleton height={30} count={10}></Skeleton>
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
