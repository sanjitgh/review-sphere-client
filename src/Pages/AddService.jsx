import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const AddService = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();

  useEffect(()=>{
    document.title = "Add Service | ReviewSphere";
  },[])

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

    const data = {
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

    // send data mongodb
    axios
      .post("https://review-brown.vercel.app/service", data)
      .then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Service Added Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to Added Service",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="py-10 bg-gray-50">
      <div className="min-h-[800px] flex justify-center items-center bg-relative">
        <form
          onSubmit={handleService}
          className="w-[1000px] mx-auto px-3 border shadow-xl shadow-green-50 rounded z-10 my-16 "
        >
          <h1 className="text-2xl md:text-5xl font-bold text-center pt-10">
            Add Service Here
          </h1>
          <div className="grid md:grid-cols-2 gap-5 md:p-10">
            {/* Email */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">Email</span>
              </div>
              <input
                defaultValue={user?.email}
                name="email"
                autoComplete="off"
                type="email"
                disabled
                required
                className="input input-bordered w-full bg-transparent focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>
            {/* image link */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">
                  Service Image
                </span>
              </div>
              <input
                name="image"
                autoComplete="off"
                type="url"
                placeholder="Service image link"
                required
                className="input input-bordered w-full bg-transparent focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>

            {/* title */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">
                  Service Title
                </span>
              </div>
              <input
                name="title"
                type="text"
                autoComplete="off"
                required
                placeholder="Title"
                className="input input-bordered w-full  focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>

            {/* Company Name */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">
                  Company Name
                </span>
              </div>
              <input
                name="companyName"
                type="text"
                autoComplete="off"
                required
                placeholder="Name"
                className="input input-bordered w-full  focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>

            {/* Website Link */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">Website</span>
              </div>
              <input
                name="website"
                type="url"
                autoComplete="off"
                required
                placeholder="https://www.example.com"
                className="input input-bordered w-full  focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>

            {/* Price */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">Price</span>
              </div>
              <input
                name="price"
                type="number"
                autoComplete="off"
                required
                placeholder="Price"
                className="input input-bordered w-full  focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>

            {/* Category */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">
                  Category
                </span>
              </div>
              <select
                name="category"
                className="select select-bordered w-full focus:outline-none rounded-none placeholder-gray-300"
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

            {/* Date */}
            <label className="form-control col-span-2 md:col-span-1 w-full">
              <div className="label">
                <span className="label-text text-black text-base">Date</span>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="select select-bordered w-full focus:outline-none rounded-none placeholder-gray-300"
              />
            </label>

            {/* description */}
            <label className="form-control col-span-2 w-full">
              <div className="label">
                <span className="label-text text-black text-base">
                  Description
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-32 w-full  focus:outline-none rounded-none placeholder-gray-300"
                name="description"
                placeholder="Write details here..."
              ></textarea>
            </label>

            {/* button */}
            <div className="col-span-2 text-center pb-5">
              <input
                className="btn text-white hover:bg-green-600 bg-green-500 transition-all rounded-none w-40"
                type="submit"
                value="Add Service"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
