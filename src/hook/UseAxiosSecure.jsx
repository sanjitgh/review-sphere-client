import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "https://backend-sigma-tawny.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handelLogout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          handelLogout();
          navigate('/login')
        }
      }
    );
  }, [handelLogout, navigate]);
  return axiosSecure
};

export default useAxiosSecure;
