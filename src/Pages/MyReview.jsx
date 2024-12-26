import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import ReviewCard from "../components/ReviewCard";
import useAxiosSecure from "../hook/UseAxiosSecure";

const MyReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = "My Reviews | ReviewSphere";

    const fetchMyReview = async () => {
      const { data } = await axiosSecure.get(`/review?email=${user?.email}`);
      setReview(data);
    };
    fetchMyReview();
  }, [user?.email]);

  const handleDelete = (id) => {
    setReview((prevService) =>
      prevService.filter((service) => service._id !== id)
    );
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2 min-h-[95vh]">
        <h1 className="text-center font-bold text-2xl md:text-5xl mb-16">
          My Reviews
        </h1>
        <p className="mb-4">
          <span className="font-semibold">Total Review :</span> {review.length}
        </p>
        <div className="grid grid-cols-1 gap-8">
          {review.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              onDelete={handleDelete}
            ></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyReview;
