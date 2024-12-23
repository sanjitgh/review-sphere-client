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
    <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description.slice(0, 60)}...</Typography>
        <Typography className="my-1">
          <span className="text-black font-bold"> Category:</span> {category}
        </Typography>
        <Typography>
          <span className="text-black font-bold"> Price:</span> $ {price}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/service/${_id}`}>
          <Button className="flex items-center gap-1">
            See Details <MdOutlineArrowRightAlt className="text-xl" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
