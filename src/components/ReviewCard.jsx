import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";
import axios from "axios";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewCard = ({ review, onDelete }) => {
  const {
    _id,
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
  } = review;


  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`http://localhost:5000/my-review/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your service has been deleted.",
            icon: "success",
          });
          onDelete(id);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full border p-5 pb-0 shadow-xl shadow-green-50"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar size="lg" variant="circular" src={currentUserProfileImage} />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {currentUserName}
            </Typography>
            <div className="5 flex items-center gap-0">
              <Rating
                style={{ maxWidth: 250 }}
                value={rating}
                readonly
                unratedColor="green"
                ratedColor="green"
              />
            </div>
          </div>
          <Typography color="blue-gray">
            {format(new Date(postedDate), "Pp")}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>{comment.slice(0, 200)}...</Typography>

        <div className="divider"></div>
        <div className="flex items-center justify-between gap-4">
          <Avatar size="lg" variant="rounded" src={image} />
          <Link to={`/service/${postId}`} className="flex-1">
            <h1 className="text-black font-medium">{title}</h1>
            <p>{website}</p>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-5">
          <FiEdit3 className="text-2xl text-green-500 cursor-pointer" />

          <HiOutlineTrash  onClick={() => handelDelete(_id)} className="text-2xl text-red-500 cursor-pointer" />
        </div>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
