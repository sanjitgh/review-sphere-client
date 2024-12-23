import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const {
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
  return (
    <Card color="transparent" shadow={false} className="w-full border p-5 pb-0">
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
              />
            </div>
          </div>
          <Typography color="blue-gray">{format(new Date(postedDate), 'Pp')}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          {comment.slice(0, 200)}...
        </Typography>

       <div className="divider"></div>
       <div className="flex items-center justify-between gap-4">
       <Avatar size="lg" variant="rounded" src={image} />
       <Link to={`/service/${postId}`} className="flex-1">
        <h1>{title}</h1>
        <p>{website}</p>
       </Link>
       </div>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
