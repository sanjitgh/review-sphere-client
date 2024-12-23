import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const MyReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => {
        setReview(res.data);
      });
  }, [user?.email]);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-center font-bold text-2xl md:text-5xl mb-16">
          My Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {review.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyReview;
