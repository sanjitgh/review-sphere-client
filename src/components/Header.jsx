import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import { FaUserCircle } from "react-icons/fa";
import imgLogo from "../assest/images/logo.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../DarkModeProvaider/DarkModeProvaider";

const Header = () => {
  const { handelLogout, user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
        }
        to={"/services"}
      >
        Services
      </NavLink>

      {user ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
            }
            to={"/add-service"}
          >
            Add Service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
            }
            to={"/my-service"}
          >
            My Service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
            }
            to={"/my-reviews"}
          >
            My Reviews
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-green-600 border-b dark:text-white" : "dark:text-white"
            }
            to={"/signup"}
          >
            SignUp
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar py-4 bg-white/70 dark:bg-blue-gray-800 dark:text-gray-300 backdrop-blur-lg text-black md:px-10 sticky top-0 z-[99] border-b dark:border-b-blue-gray-700">
      <div className="navbar-start w-full md:w-1/2 justify-between md:justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="#43a047 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-green-600 dark:bg-blue-gray-800 dark:text-gray-200 text-white rounded mt-5 w-52 p-4 shadow z-20 gap-3"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-xl sm:text-3xl text-gray-900 dark:text-white cursor-pointer font-bold logo flex items-center gap-2"
        >
          <img className="md:w-10 md:h-10 w-7 h-7" src={imgLogo} alt="" />
          <i>ReviewSphere</i>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-medium items-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3 items-center">
        <div className="relative text-2xl cursor-pointer flex items-center gap-4 top-0">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <MdOutlineLightMode className="text-white" />
            ) : (
              <MdOutlineDarkMode />
            )}{" "}
          </button>

          {user ? (
            <>
              <Menu>
                <MenuHandler>
                  <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="cursor-pointer"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                </MenuHandler>
                <MenuList className="mt-4 -ml-3 lg:-ml-5 bg-green-600 dark:bg-blue-gray-800 dark:text-gray-300 text-white border-none ">
                  <MenuItem className="flex items-center gap-2 hover:!bg-transparent hover:!text-white">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                        fill="#fff"
                      />
                    </svg>
                    <Typography
                      onClick={handelLogout}
                      variant="small"
                      className="font-medium "
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <>
              <div className="avatar">
                <Link to={"/login"}>
                  <FaUserCircle className="text-5xl text-green-600" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
