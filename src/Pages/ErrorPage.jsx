import { useEffect } from "react";
import { FaRegSadCry } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 Error | ReviewSphere";
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center dark:bg-blue-gray-900">
      <div>
        <h1 className="text-5xl md:text-9xl xl:text-[150px] font-bold text-green-600 text-center flex justify-center dark:text-green-700">
          OPOS!
        </h1>
        <p className="text-green-600 dark:text-green-700 dark:bg-blue-gray-900 bg-white font-medium text-2xl flex gap-2 items-center justify-center -mt-9 z-10 relative py-3">
         404 Page can not found! <FaRegSadCry />
        </p>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex items-center gap-4 text-white transition px-4 py-2 rounded bg-green-600 hover:bg-green-700 mt-10 dark:bg-green-700 dark:hover:bg-green-800"
        >
          Back to Home <RiArrowGoBackFill />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
