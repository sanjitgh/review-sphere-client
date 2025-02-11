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
    <Card className="mt-6 rounded justify-between bg-gradient-to-b from-gray-100 to-white dark:from-blue-gray-900 dark:to-blue-gray-800">
      <div>
        <CardHeader color="blue-gray" className="relative rounded">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody className="p-4">
          <Typography variant="h5" className="mb-1 text-lg text-gray-900 dark:text-gray-200">
            {title.slice(0, 22)}...
          </Typography>
          <Typography className="text-gray-600 dark:text-gray-300">
            {description.slice(0, 50)}...
          </Typography>
        </CardBody>
      </div>
      <CardFooter className="p-4">
        <Link to={`/service/${_id}`}>
          <Button
            variant="filled"
            className="flex items-center justify-center gap-1 bg-green-600 px-4 py-3 rounded w-full hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900"
          >
            See Details <MdOutlineArrowRightAlt className="text-xl" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
