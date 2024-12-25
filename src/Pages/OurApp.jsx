import { Button } from "@material-tailwind/react";
import image from "../assest/images/rb_572.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const OurApp = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-2">
        <div className="bg-white border rounded-lg shadow-lg shadow-green-50 p-6 md:flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <img src={image} alt="App Preview" className="w-36 h-auto" />
          </div>
          <div className="ml-6 flex-grow">
            <h2 className="text-lg font-semibold text-gray-800">
              Download our App
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Experience the best of our services on your mobile device.
              Download now and start exploring.
            </p>
            <div className="mt-4">
              <a href="https://play.google.com" target="_blank">
                <Button
                  className="flex items-center gap-2 bg-green-500"
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
