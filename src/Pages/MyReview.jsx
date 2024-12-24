import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const MyReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    document.title = "My Reviews | ReviewSphere";
    axios
      .get(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => {
        setReview(res.data);
      });
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
        {review.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {review.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                onDelete={handleDelete}
              ></ReviewCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl font-semibold">No Review Found</p>
        )}
      </div>
    </div>
  );
};

export default MyReview;
