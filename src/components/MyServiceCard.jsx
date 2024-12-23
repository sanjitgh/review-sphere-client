import { Avatar, Chip } from "@material-tailwind/react";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
const MyServiceCard = ({ service }) => {
  const {
    _id,
    image,
    title,
    website,
    price,
    category,
    description,
    companyName,
  } = service;
  return (
    <>
      <tr>
        <th>
          <Avatar src={image} />;
        </th>
        <td>{companyName.slice(0, 20)}</td>
        <td>{title.slice(0, 30)}</td>
        <td>
          <a href={website} target="_blank">
            {website.slice(0, 30)}
          </a>
        </td>
        <td>
          <Chip className="bg-green-500 text-center w-20" value={category} />
        </td>
        <td>$ {price}</td>
        <td>
          <div className="flex items-center gap-3">
            <FiEdit3 className="text-2xl text-green-500" />
            <HiOutlineTrash className="text-2xl text-red-500" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyServiceCard;
