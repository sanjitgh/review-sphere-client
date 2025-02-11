import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonStyle = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className=" border-gray-300 rounded-lg shadow-sm">
          <Skeleton height={100} />
          <Skeleton height={30} className="mt-2" />
          <Skeleton height={20} className="mt-2" />
          <Skeleton height={40} className="mt-4" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonStyle;
