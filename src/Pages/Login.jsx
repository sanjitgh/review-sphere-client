import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const { handelLogin, handelGoogleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    handelLogin(email, password)
      .then((res) => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Invalid User!");
      });
  };

  //  google login
  const handelLoginWithGoogle = () => {
    handelGoogleLogin().then((res) => {
      const name = res.user.displayName;
      const image = res.user.photoURL;
      const email = res.user.email;
      const newUser = {
        name,
        image,
        email,
      };

      // save user info to the database
      axios.post("https://review-brown.vercel.app/user", newUser);

      if (location.state) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    });
  };

  return (
    <div className="py-20 min-h-[calc(100vh-70px)] bg-gray-100 flex justify-center items-center dark:bg-blue-gray-900">
      <div className="container mx-auto px-3">
        <div className="card border md:p-10 p-5 max-w-[650px] mx-auto shadow-lg shadow-green-50 bg-white rounded dark:bg-blue-gray-800 dark:text-gray-200 dark:shadow-blue-gray-800 dark:border-none">
          <form onSubmit={handleSubmit(onSubmit)} className="px-3 text-black">
            <div className="my-3">
              <h3 className="text-3xl font-medium mb-3 text-center dark:text-gray-200">
                Socail Link
              </h3>
              <Link
                onClick={handelLoginWithGoogle}
                className="flex btn items-center gap-3 dark:text-gray-200 bg-green-500 hover:bg-green-600 justify-center p-3 rounded text-gray-200 dark:bg-green-800 dark:hover:bg-green-900 dark:border-none"
              >
                Login With Google
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
              </Link>
            </div>
            <div className="w-full h-[1px] bg-gray-500 mb-4 mt-8 dark:bg-blue-gray-700"></div>
            <div className="form-control">
              <label className="label">
                <span className="text-black dark:text-gray-200">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                autoComplete="off"
                placeholder="email"
                className="input input-bordered rounded bg-transparent placeholder:text-gray-400 text-black dark:text-gray-300"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black dark:text-gray-200">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password length must be 6 character",
                  },
                })}
                type="password"
                autoComplete="off"
                placeholder="password"
                className="input input-bordered rounded bg-transparent placeholder:text-gray-400 text-black dark:text-gray-300"
              />
            </div>
            {errors.password && (
              <p className="text-green-500 mb-2 mt-3">
                {errors.password.message}
              </p>
            )}

            <div className="form-control mt-6">
              <button
                className="btn bg-green-500 border-white hover:bg-green-600 text-white text-base font-medium rounded dark:bg-green-800 dark:hover:bg-green-900 dark:border-none"
                variant="filled"
              >
                Login
              </button>
            </div>
            <div className="mt-4">
              <p className="dark:text-gray-200">
                Are you new here?
                <Link to={"/signup"}>
                  <b> Register</b>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
