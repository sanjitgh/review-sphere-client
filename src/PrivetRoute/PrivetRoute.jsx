import { useContext } from "react";
import { AuthContext } from "../provaider/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex bg-cyan-50 justify-center items-center min-h-[95vh] dark:bg-gray-600">
        <CircleLoader 
        color={"#000000"}
         size={70} />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
