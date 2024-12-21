import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../provaider/AuthProvaider";

const AddMovie = () => {
  const user = useContext(AuthContext)

  useEffect(() => {
    document.title = "Add Movie | Orchid";
  }, []);

  const handelAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const year = form.year.value;
    const rating = form.rating.value;
    const summery = form.summery.value;
    // image validation
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    if (!urlRegex.test(image)) {
      return toast.error("You need to add valid image URL.", {
        style: {
          boxShadow: "5px 0 px 5px 0px #0E7490",
          color: "#0E7490",
          fontWeight: "500",
        },
      });
    }

    // title validation
    if (title.length < 2) {
      return toast.error("You need to add at least two character.", {
        style: {
          boxShadow: "5px 0 px 5px 0px #0E7490",
          color: "#0E7490",
          fontWeight: "500",
        },
      });
    }

    // duration validation
    if (parseInt(duration) < 60) {
      return toast.error("Duration will be at least 60 minues.", {
        style: {
          boxShadow: "5px 0 px 5px 0px #0E7490",
          color: "#0E7490",
          fontWeight: "500",
        },
      });
    }

    // year validation
    if (!parseInt(year)) {
      return toast.error("Provide Release Year", {
        style: {
          boxShadow: "5px 0 px 5px 0px #0E7490",
          color: "#0E7490",
          fontWeight: "500",
        },
      });
    }

    // rating validation
    if (parseInt(rating) > 5) {
      return toast.error("You can add maximum 5 star", {
        style: {
          boxShadow: "5px 0 px 5px 0px #0E7490",
          color: "#0E7490",
          fontWeight: "500",
        },
      });
    }
    // summery validation
    if (summery.length < 10) {
      return toast.error("Summery will be minimum 10 character.", {
        style: {
          boxShadow: "5px 0 px 5px 0px #0E7490",
          color: "#0E7490",
          fontWeight: "500",
        },
      });
    }

    const currentUserEmail = user?.user?.email;

    const movies = {
      image,
      title,
      genre,
      duration,
      year,
      rating,
      summery,
      currentUserEmail
    };

    // send data mongodb
    fetch("https://orchid-backend-server.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movies),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Movie Successfully Added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-[800px] flex justify-center items-center bg-[url('https://i.ibb.co.com/8ssfbBv/avengers-face-off.webp')] bg-center bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 bg-black/90 flex items-center justify-center"></div>
      <form
        onSubmit={handelAddMovie}
        className="w-[1000px] mx-auto px-3 bg-cyan-700 dark:bg-slate-800 shadow-[#38e8ff4d] dark:shadow-slate-800 shadow-xl text-white rounded z-10 my-16 "
      >
        <h1 className="text-2xl md:text-5xl font-bold text-center pt-10 logo">
          Add Movie Here
        </h1>
        <div className="grid md:grid-cols-2 gap-5 md:p-10">
          {/* image link */}
          <label className="form-control col-span-2 md:col-span-1 w-full">
            <div className="label">
              <span className="label-text text-white text-base">
                Movie Poster
              </span>
            </div>
            <input
              name="image"
              autoComplete="off"
              type="text"
              placeholder="Poster image link"
              required
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* title */}
          <label className="form-control col-span-2 md:col-span-1 w-full">
            <div className="label">
              <span className="label-text text-white text-base">
                Movie Title
              </span>
            </div>
            <input
              name="title"
              type="text"
              autoComplete="off"
              required
              placeholder="Title"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* genre */}
          <label className="form-control col-span-2 md:col-span-1 w-full">
            <div className="label">
              <span className="label-text text-white text-base">Genre</span>
            </div>
            <select
              name="genre"
              className="select select-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            >
              <option disabled className="text-black">
                Choose One
              </option>
              <option className="text-black">Action</option>
              <option className="text-black">Adventure</option>
              <option className="text-black">Comedy</option>
              <option className="text-black">Drama</option>
              <option className="text-black">Horror</option>
              <option className="text-black">Thriller</option>
              <option className="text-black">Science fiction</option>
            </select>
          </label>

          {/* duration */}
          <label className="form-control col-span-2 md:col-span-1 w-full">
            <div className="label">
              <span className="label-text text-white text-base">Duration</span>
            </div>
            <input
              name="duration"
              type="number"
              autoComplete="off"
              required
              placeholder="Duration as minutes"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* Release Year */}
          <label className="form-control col-span-2 md:col-span-1 w-full">
            <div className="label">
              <span className="label-text text-white text-base">
                Release Year
              </span>
            </div>
            <select
              name="year"
              className="select select-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            >
              <option className="text-black">Add Release year</option>
              <option className="text-black">2010</option>
              <option className="text-black">2011</option>
              <option className="text-black">2012</option>
              <option className="text-black">2013</option>
              <option className="text-black">2014</option>
              <option className="text-black">2015</option>
              <option className="text-black">2016</option>
              <option className="text-black">2017</option>
              <option className="text-black">2018</option>
              <option className="text-black">2019</option>
              <option className="text-black">2020</option>
              <option className="text-black">2021</option>
              <option className="text-black">2022</option>
              <option className="text-black">2023</option>
              <option className="text-black">2024</option>
            </select>
          </label>

          {/* Rating  */}
          <label className="form-control col-span-2 md:col-span-1 w-full">
            <div className="label">
              <span className="label-text text-white text-base">Rating</span>
            </div>
            <input
              name="rating"
              type="number"
              autoComplete="off"
              required
              placeholder="Rating 1 to 5 Star"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* Summery  */}
          <label className="form-control w-full col-span-2">
            <div className="label">
              <span className="label-text text-white text-base">Summery</span>
            </div>
            <textarea
              name="summery"
              required
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300 h-32 p-4"
              placeholder="Detaile"
            ></textarea>
          </label>

          {/* button */}
          <div className="col-span-2 text-center pb-5">
            <input
              className="btn bg-transparent hover:bg-transparent border-white text-white rounded-tl-lg hover:rounded-tl-none hover:rounded-tr-lg rounded-br-lg hover:rounded-br-none transition-all hover:rounded-bl-lg rounded-none w-40"
              type="submit"
              value="Add Movie"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
