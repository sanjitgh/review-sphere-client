import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pt-14 md:pt-20 bg-white dark:bg-blue-gray-800">
      <div className="md:px-10 mx-auto px-3">
        <div className="footer">
          <aside>
            <h1 className="logo text-gray-900 font-bold md:text-4xl text-2xl dark:text-gray-200">
              ReviewSphere
            </h1>
            <p className="max-w-[350px] my-3 text-gray-600 dark:text-gray-300">
              Your go-to source for honest reviews and expert recommendations.
              Reach out for support or collaboration.
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <a
                  className="text-xl text-green-600 hover:text-green-700 transition-all dark:text-gray-400 dark:hover:text-gray-500"
                  href={"https://www.facebook.com/"}
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="text-xl text-green-600 hover:text-green-700 transition-all dark:text-gray-400 dark:hover:text-gray-500"
                  href={"https://www.twitter.com/"}
                  target="_blank"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  className="text-xl text-green-600 hover:text-green-700 transition-all dark:text-gray-400 dark:hover:text-gray-500"
                  href={"https://www.instagram.com/"}
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </aside>
          <nav>
            <h6 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Services</h6>
            <Link
              to={"/services"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all dark:text-gray-300"
            >
              Service
            </Link>
            <Link
              to={"/my-reviews"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all dark:text-gray-300"
            >
              Reviews
            </Link>
          </nav>
          <nav>
            <h6 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Information</h6>
            <Link
              to={"/signup"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all dark:text-gray-300"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all dark:text-gray-300"
            >
              Login
            </Link>
          </nav>
          <nav>
            <h6 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Apps</h6>
            <a
              href="https://play.google.com"
              target="_blank"
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all dark:text-gray-300"
            >
              Android
            </a>
          </nav>
        </div>
      </div>
      <div className="py-8 border-t border-gray-200 dark:border-blue-gray-700 mt-10">
        <p className="text-center font-medium text-gray-900 dark:text-gray-200">
          © {new Date().getFullYear()} Review Sphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
