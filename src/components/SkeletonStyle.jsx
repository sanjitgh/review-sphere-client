import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../DarkModeProvaider/DarkModeProvaider";

const SkeletonStyle = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {theme === "dark" ? (
        <>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="dark:border-gray-700 bg-white dark:bg-transparent rounded-lg shadow-sm"
            >
              <Skeleton
                height={100}
                baseColor="#37474F"
                highlightColor="#263238"
                className="dark:bg-blue-gray-800"
              />
              <Skeleton
                baseColor="#37474F"
                highlightColor="#263238"
                height={30}
                className="mt-2 dark:bg-blue-gray-800"
              />
              <Skeleton
                baseColor="#37474F"
                highlightColor="#263238"
                height={20}
                className="mt-2 dark:bg-blue-gray-800"
              />
              <Skeleton
                baseColor="#37474F"
                highlightColor="#263238"
                height={40}
                className="mt-4 dark:bg-blue-gray-800"
              />
            </div>
          ))}
        </>
      ) : (
        <>
          {[...Array(6)].map((_, index) => (
            <div key={index} className=" border-gray-300 rounded-lg shadow-sm">
              <Skeleton height={100} />
              <Skeleton height={30} className="mt-2" />
              <Skeleton height={20} className="mt-2" />
              <Skeleton height={40} className="mt-4" />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SkeletonStyle;
