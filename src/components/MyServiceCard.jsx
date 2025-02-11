import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogHeader,
  IconButton,
  Avatar,
  Chip,
} from "@material-tailwind/react";
const MyServiceCard = ({ service, onDelete }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();

  const { _id, image, title, website, price, category, companyName } = service;

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
          axios.delete(`https://review-brown.vercel.app/my-service/${id}`);
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
    axios.get(`https://review-brown.vercel.app/service/${id}`).then((res) => {
      setData(res.data);
      setStartDate(new Date(res.data.date));
      handleOpen();
    });
  };

  const handleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const image = form.image.value;
    const title = form.title.value;
    const companyName = form.companyName.value;
    const website = form.website.value;
    const price = form.price.value;
    const category = form.category.value;
    const date = startDate;
    const description = form.description.value;

    const updatedData = {
      email,
      image,
      title,
      companyName,
      website,
      price,
      category,
      date,
      description,
    };

    // update data mongodb
    try {
      axios.put(`https://review-brown.vercel.app/service/${_id}`, updatedData);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your service updated successfully",
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
      <tr className="dark:border-blue-gray-800">
        <th>
          <Avatar src={image} />
        </th>
        <td className="dark:text-gray-300">{companyName.slice(0, 20)}</td>
        <td className="dark:text-gray-300">{title.slice(0, 30)}</td>
        <td className="dark:text-gray-300">
          <a href={website} target="_blank">
            {website.slice(0, 30)}
          </a>
        </td>
        <td>
          <Chip
            className="bg-green-600 dark:bg-green-800 text-center w-20 rounded"
            value={category}
          />
        </td>
        <td className="dark:text-gray-300">$ {price}</td>
        <td>
          <div className="flex items-center gap-3">
            <FiEdit3
              onClick={() => handelModal(_id)}
              className="text-2xl text-green-500 cursor-pointer dark:text-green-800"
            />

            <HiOutlineTrash
              onClick={() => handelDelete(_id)}
              className="text-2xl text-red-500 cursor-pointer"
            />
          </div>
        </td>
      </tr>

      <tr className="border-none">
        <td className="p-0">
          <Dialog
            size="lg"
            open={open}
            handler={handleOpen}
            className="dark:bg-blue-gray-900 dark:text-gray-200 rounded"
          >
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
            <div className="h-[500px] my-2 overflow-y-scroll">
              <form onSubmit={handleService}>
                <h1 className="text-2xl font-bold text-center  ">
                  Update Service
                </h1>
                <div className="grid md:grid-cols-2 gap-5 md:p-5 mx-2">
                  {/* Email */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Email
                      </span>
                    </div>
                    <input
                      defaultValue={data?.email}
                      name="email"
                      autoComplete="off"
                      type="email"
                      disabled
                      required
                      className="input input-bordered w-full dark:bg-transparent dark:border-blue-gray-700 dark:text-gray-300 bg-transparent focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400"
                    />
                  </label>
                  {/* image link */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Service Image
                      </span>
                    </div>
                    <input
                      defaultValue={data?.image}
                      name="image"
                      autoComplete="off"
                      type="url"
                      placeholder="Service image link"
                      required
                      className="input input-bordered w-full dark:bg-transparent dark:border-blue-gray-700 dark:text-gray-300 bg-transparent focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400"
                    />
                  </label>

                  {/* title */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Service Title
                      </span>
                    </div>
                    <input
                      defaultValue={data?.title}
                      name="title"
                      type="text"
                      autoComplete="off"
                      required
                      disabled
                      placeholder="Title"
                      className="input input-bordered w-full dark:bg-transparent dark:border-blue-gray-700 dark:text-gray-300  focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400"
                    />
                  </label>

                  {/* Company Name */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Company Name
                      </span>
                    </div>
                    <input
                      defaultValue={data?.companyName}
                      name="companyName"
                      type="text"
                      autoComplete="off"
                      required
                      placeholder="Name"
                      className="input input-bordered w-full dark:bg-transparent dark:border-blue-gray-700 dark:text-gray-300  focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400"
                    />
                  </label>

                  {/* Website Link */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Website
                      </span>
                    </div>
                    <input
                      defaultValue={data?.website}
                      name="website"
                      type="url"
                      autoComplete="off"
                      required
                      placeholder="https://www.example.com"
                      className="input input-bordered w-full dark:bg-transparent dark:border-blue-gray-700 dark:text-gray-300  focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400"
                    />
                  </label>

                  {/* Price */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Price
                      </span>
                    </div>
                    <input
                      defaultValue={data?.price}
                      name="price"
                      type="number"
                      autoComplete="off"
                      required
                      placeholder="Price"
                      className="input input-bordered w-full dark:bg-transparent dark:border-blue-gray-700 dark:text-gray-300  focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400"
                    />
                  </label>

                  {/* Category */}
                  {data?.category && (
                    <label className="form-control col-span-2 md:col-span-1 w-full">
                      <div className="label">
                        <span className="label-text text-black text-base dark:text-gray-200">
                          Category
                        </span>
                      </div>
                      <select
                        defaultValue={data?.category}
                        name="category"
                        className="select select-bordered w-full focus:outline-none rounded-none placeholder-gray-300 dark:placeholder-gray-400 dark:bg-transparent dark:border-blue-gray-800"
                      >
                        <option disabled className="text-black">
                          Choose One
                        </option>
                        <option className="text-black">Tech</option>
                        <option className="text-black">Science</option>
                        <option className="text-black">Natures</option>
                        <option className="text-black">Travel</option>
                      </select>
                    </label>
                  )}

                  {/* Date */}
                  <label className="form-control col-span-2 md:col-span-1 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Date
                      </span>
                    </div>
                    <DatePicker
                      defaultValue={startDate}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="select select-bordered w-full focus:outline-none rounded-none placeholder-gray-300  dark:placeholder-gray-400 dark:bg-transparent dark:border-blue-gray-800"
                    />
                  </label>

                  {/* description */}
                  <label className="form-control col-span-2 w-full">
                    <div className="label">
                      <span className="label-text text-black text-base dark:text-gray-200">
                        Description
                      </span>
                    </div>
                    <textarea
                      defaultValue={data?.description}
                      className="textarea textarea-bordered h-32 w-full  focus:outline-none rounded-none placeholder-gray-300  dark:placeholder-gray-400 dark:bg-transparent dark:border-blue-gray-800"
                      name="description"
                      placeholder="Write details here..."
                    ></textarea>
                  </label>

                  {/* button */}
                  <div className="col-span-2 text-center pb-5">
                    <input
                      className="btn border-none text-white hover:bg-green-600 bg-green-500 transition-all rounded-none w-40 dark:bg-green-800 dark:hover:bg-green-900"
                      type="submit"
                      value="Update Service"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Dialog>
        </td>
      </tr>
    </>
  );
};

export default MyServiceCard;
