import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  Breadcrumbs,
  Button,
  Rating,
  Textarea,
} from "@material-tailwind/react";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${service?.title} | ReviewSphere`;
  }, [service]);

  const { id } = useParams();
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const {
    _id,
    image,
    title,
    companyName,
    website,
    price,
    category,
    date,
    description,
  } = service;

  const getServiceData = async () => {
    const { data } = await axios.get(
      `https://review-brown.vercel.app/service/${id}`
    );
    setService(data);
  };

  useEffect(() => {
    getServiceData();
  }, [id]);

  const handleReview = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const currentUserName = user?.displayName;
    const currentUserProfileImage = user?.photoURL;
    const postId = _id;
    const postedDate = new Date();
    const userEmail = user?.email;
    const data = {
      postId,
      image,
      title,
      website,
      comment,
      rating,
      postedDate,
      userEmail,
      currentUserName,
      currentUserProfileImage,
    };

    if (rating === 0) {
      return toast.error("Add Rating Star!");
    }

    // send review in db
    axios
      .post("https://review-brown.vercel.app/review", data)
      .then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thanks for your review!",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        setRating(0);
        navigate("/my-reviews");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="py-14 md:pt-5 bg-gray-100 dark:bg-blue-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* breadCrumb */}
        <div role="presentation" className="mb-5">
          <Breadcrumbs className="bg-transparent">
            <Link className="dark:text-gray-200 text-gray-900 hover:text-green-700" to={"/"}>
              Home
            </Link>
            <Link className="dark:text-gray-200 text-gray-900 hover:text-green-700" to={"/services"}>
              Services
            </Link>

            <Link className="dark:text-gray-200 text-gray-900 hover:text-green-700">{title}</Link>
          </Breadcrumbs>
        </div>

        <div className="p-10 bg-white dark:bg-blue-gray-800 rounded">
          <div>
            <img className="w-full rounded" src={image} alt="" />
          </div>
          <div className="text-center">
            <h1 className="my-5 font-bold md:text-5xl text-2xl dark:text-gray-200">{title}</h1>
            <h4 className="font-bold sm:text-lg text-base dark:text-gray-300">
              Date : {date ? format(new Date(date), "P") : "No date available"}
            </h4>
            <p className="dark:text-gray-300">{description}</p>
            <div className="overflow-x-auto mt-5">
              <table className="table">
                <thead>
                  <tr className="dark:text-gray-200">
                    <th>Company Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dark:text-gray-300">
                    <td className="w-1/4">{companyName}</td>
                    <td className="w-1/4">{category}</td>
                    <td className="w-1/4">${price}</td>
                    <td className="w-1/4">
                      <a href={website} target="_blank">
                        {website}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 bg-white p-10 dark:bg-blue-gray-800">
        {/* comment & review form */}
        <form onSubmit={handleReview} className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-2 dark:text-gray-200">
              Leave a Reply
            </h1>
            <p className="mb-4 italic dark:text-gray-300">
              Your email address will be published with your review.
              <span className="text-red-500">*</span>
            </p>
          </div>
          <div>
            <Textarea
              name="comment"
              label="Comment"
              style={{ height: 200 }}
              success
              required
              className="dark:text-gray-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <h5 className="font-semibold dark:text-gray-200">Give Rating : </h5>
            <Rating
              style={{ maxWidth: 150 }}
              value={rating}
              onChange={setRating}
              unratedColor="green"
              ratedColor="green"
            />
          </div>
          <div className="text-end">
            <Button variant="filled" type="submit" className="bg-green-500">
              Add Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
