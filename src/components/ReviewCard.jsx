import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
  Textarea,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  IconButton,
  DialogHeader,
} from "@material-tailwind/react";
import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";

const ReviewCard = ({ review, onDelete }) => {
  const [data, setData] = useState(null);

  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();
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
  const [ratings, setRatings] = useState(rating);

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
          axios.delete(`https://review-brown.vercel.app/my-review/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your service has been deleted.",
            icon: "success",
          });
          onDelete(id);
        } catch (error) {
          // console.log(error);
        }
      }
    });
  };

  const handelModal = (id) => {
    axios.get(`https://review-brown.vercel.app/review/${id}`).then((res) => {
      setData(res.data);
      handleOpen();
    });
  };

  const handleReview = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const currentUserName = user?.displayName;
    const currentUserProfileImage = user?.photoURL;
    const postId = _id;
    const updatedData = {
      postId,
      image,
      title,
      website,
      comment,
      rating: ratings,
      postedDate,
      userEmail,
      currentUserName,
      currentUserProfileImage,
    };

    if (ratings === 0) {
      return toast.error("Update Rating Star!");
    }

    // update data mongodb
    try {
      axios.put(`https://review-brown.vercel.app/review/${_id}`, updatedData);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your review updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setOpen(!open);
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        className="w-full border p-5 pb-0 shadow-xl shadow-green-50 rounded"
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
            <FiEdit3
              onClick={() => handelModal(_id)}
              className="text-2xl text-green-500 cursor-pointer"
            />

            <HiOutlineTrash
              onClick={() => handelDelete(_id)}
              className="text-2xl text-red-500 cursor-pointer"
            />
          </div>
        </CardBody>
      </Card>

      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="justify-end pt-3">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <div className="md:px-10 p-5">
          <form onSubmit={handleReview} className="flex flex-col gap-4 ">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl mb-2">
                Update Review
              </h1>
            </div>
            <div>
              <Textarea
                defaultValue={data?.comment}
                name="comment"
                label="Comment"
                style={{ height: 200 }}
                success
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-semibold">Give Rating : </h5>
              <Rating
                defaultValue={data?.rating}
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRatings}
                unratedColor="green"
                ratedColor="green"
              />
            </div>
            <div className="text-end">
              <Button variant="filled" type="submit" className="bg-green-500">
                Update Review
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default ReviewCard;
