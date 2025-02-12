import { Button } from "@material-tailwind/react";
import image from "../assest/images/rb_572.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const OurApp = () => {
  return (
    <div className="py-14 md:py-20 bg-gray-100 dark:bg-blue-gray-900">
      <div className="mx-2">
        <div className="bg-white rounded shadow-lg shadow-green-50 p-3 md:flex items-center justify-between max-w-6xl mx-auto dark:bg-blue-gray-800 dark:shadow-blue-gray-800">
          <div className="flex-shrink-0">
            <img
              src={image}
              alt="App Preview"
              className="w-36 md:w-60 h-auto dark:grayscale"
            />
          </div>
          <div className="ml-6 flex-grow">
            <h2 className="text-3xl md:text-4xl font-semibold text-green-600 mb-2">
              Download Our App
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get the ultimate experience of our services right at your
              fingertips. Enjoy seamless access, exclusive features, and
              top-notch convenience on your mobile device. Download now and
              start exploring today!
            </p>
            <div className="mt-4">
              <a href="https://play.google.com" target="_blank">
                <Button
                  className="flex items-center gap-2 bg-green-600 rounded dark:bg-green-800 dark:hover:bg-green-900"
                  variant="filled"
                >
                  <IoLogoGooglePlaystore />
                  Download on App Store
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
