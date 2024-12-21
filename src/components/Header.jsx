import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { handelLogout, user } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-purple-500 border-b" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-purple-500 border-b" : ""
        }
        to={"/services"}
      >
        Services
      </NavLink>

      {user ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-purple-500 border-b" : ""
            }
            to={"/add-service"}
          >
            Add Service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-purple-500 border-b" : ""
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
              isActive ? "border-b-purple-500 border-b" : ""
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-purple-500 border-b" : ""
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
    <div className="navbar py-4 bg-gray-100 text-black md:px-10 sticky top-0 z-[99]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="menu menu-sm dropdown-content bg-cyan-700 dark:bg-slate-700 rounded-box mt-3 w-52 p-4 shadow z-20 gap-3"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl font-bold logo">
          ReviewSphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-medium items-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3 items-center">
        <div className="relative text-2xl cursor-pointer flex items-center gap-2">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img referrerPolicy="no-referrer" src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handelLogout} className="btn hover:bg-gray-100">
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="avatar">
                <FaUserCircle className="text-5xl text-gray-800" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
