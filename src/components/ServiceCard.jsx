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
  const {
    _id,
    image,
    title,
    price,
    category,
    description,
  } = service;

  return (
    <Card className="mt-6 rounded">
      <CardHeader color="blue-gray" className="relative rounded">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography>{description.slice(0, 60)}...</Typography>
      </CardBody>
      <CardFooter className="pt-0 -mt-2">
        <Link to={`/service/${_id}`}>
          <Button variant="filled" className="flex items-center gap-1 bg-green-500 px-4 py-3 rounded">
            See Details <MdOutlineArrowRightAlt className="text-xl" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
