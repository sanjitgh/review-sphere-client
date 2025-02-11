import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pt-14 md:pt-20 bg-white border-t text-black">
      <div className="md:px-10 mx-auto px-3">
        <div className="footer">
          <aside>
            <h1 className="logo text-gray-900 font-bold md:text-4xl text-2xl">
              ReviewSphere
            </h1>
            <p className="max-w-[350px] my-3 text-gray-600">
              Your go-to source for honest reviews and expert recommendations.
              Reach out for support or collaboration.
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <a
                  className="text-xl text-green-600 hover:text-green-700 transition-all"
                  href={"https://www.facebook.com/"}
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="text-xl text-green-600 hover:text-green-700 transition-all"
                  href={"https://www.twitter.com/"}
                  target="_blank"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  className="text-xl text-green-600 hover:text-green-700 transition-all"
                  href={"https://www.instagram.com/"}
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </aside>
          <nav>
            <h6 className="text-xl font-semibold text-gray-800">Services</h6>
            <Link
              to={"/services"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all"
            >
              Service
            </Link>
            <Link
              to={"/my-reviews"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all"
            >
              Reviews
            </Link>
          </nav>
          <nav>
            <h6 className="text-xl font-semibold text-gray-800">Information</h6>
            <Link
              to={"/signup"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all"
            >
              Login
            </Link>
          </nav>
          <nav>
            <h6 className="text-xl font-semibold text-gray-800">Apps</h6>
            <a
              href="https://play.google.com"
              target="_blank"
              className="text-base font-normal text-gray-600 hover:text-gray-700 transition-all"
            >
              Android
            </a>
          </nav>
        </div>
      </div>
      <div className="border-t border-t-green-50 mt-10 mb-0"></div>
      <div className="py-8">
        <p className="text-center font-medium">
          © {new Date().getFullYear()} Review Sphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
