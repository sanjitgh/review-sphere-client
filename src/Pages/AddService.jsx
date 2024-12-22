import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hook/useAuth";

const AddService = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {user} = useAuth();

  return (
    <div>
      <div className="min-h-[800px] flex justify-center items-center bg-relative">
        <form className="w-[1000px] mx-auto px-3 border shadow-xlrounded z-10 my-16 ">
          <h1 className="text-2xl md:text-5xl font-bold text-center pt-10 logo">
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
                type="text"
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
                type="text"
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

            {/* button */}
            <div className="col-span-2 text-center pb-5">
              <input
                className="btn text-white bg-gray-800  transition-all hover:rounded-bl-lg rounded-none w-40"
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
