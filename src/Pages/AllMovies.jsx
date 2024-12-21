import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const movies = useLoaderData();
  const [movieData, setMovieData] = useState(movies);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "All Movies | Orchid";
  }, []);

  useEffect(() => {
    fetch(`https://orchid-backend-server.vercel.app/movies?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, [search]);

  return (
    <div className="pb-20 pt-10 bg-cyan-50 dark:bg-gray-800">
      <div className="container mx-auto px-3 min-h-[95vh]">
        <div className="md:flex justify-between">
          <h3 className="md:text-4xl text-3xl mb-7 dark:text-gray-400 font-semibold">
            All Movies
          </h3>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Secrch"
            className="input dark:text-slate-200 dark:border-slate-200 bg-transparent input-bordered sm:w-[300px] w-full mb-5 md:mb-0"
          />
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
          {movieData.length === 0 ? (
            <p className="text-2xl font-medium text-blue-500 text-center border-none col-span-3 mt-10 dark:text-gray-400">
              Data Not found.
            </p>
          ) : (
            movieData.map((movie) => (
              <MovieCard key={movie._id} movie={movie}></MovieCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
