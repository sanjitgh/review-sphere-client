import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, image, title, description } = service;

  return (
    <Card className="mt-6 rounded justify-between">
      <div>
        <CardHeader color="blue-gray" className="relative rounded">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody className="p-4">
          <Typography variant="h5" color="blue-gray" className="mb-1 text-lg">
            {title.slice(0, 22)}...
          </Typography>
          <Typography className="text-gray-600">
            {description.slice(0, 50)}...
          </Typography>
        </CardBody>
      </div>
      <CardFooter className="p-4">
        <Link to={`/service/${_id}`}>
          <Button
            variant="filled"
            className="flex items-center justify-center gap-1 bg-green-600 px-4 py-3 rounded w-full hover:bg-green-700"
          >
            See Details <MdOutlineArrowRightAlt className="text-xl" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
