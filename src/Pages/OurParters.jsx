import { Button } from "@material-tailwind/react";
import image1 from "../assest/images/2.png";
import image2 from "../assest/images/3.png";
import image3 from "../assest/images/5.png";
import image4 from "../assest/images/6.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const OurParters = () => {
  return (
    <div className="md:py-20 py-14">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 place-items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              We Work With the <br />
              Best Partners
            </h1>
            <p className="text-gray-600">
              While we are at the forefront of and specialize in design-build,
              we are very familiar with a number of delivery methods and are
              confident we can find the process that will best help you meet
              your goals.
            </p>
            <Button variant="filled" className="flex items-center gap-1 bg-green-600 rounded mt-4">
            View Service <MdOutlineArrowRightAlt className="text-xl" />
          </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 justify-items-center">
            <div className="text-center mx-auto">
              <img className="max-w-28 mx-auto" src={image1} alt="" />
              <p className="font-semibold mt-3F">
                Software. Gadgets. Innovation.
              </p>
            </div>
            <div className="text-center mx-auto md:mt-20">
              <img className="max-w-28 mx-auto" src={image2} alt="" />
              <p className="font-semibold mt-3F">
                Clothing. Accessories. Styling.
              </p>
            </div>
            <div className="text-center mx-auto md:-mt-20">
              <img className="max-w-28 mx-auto" src={image3} alt="" />
              <p className="font-semibold mt-3F">
                Research. Solutions. Advancement.
              </p>
            </div>
            <div className="text-center mx-auto">
              <img className="max-w-28 mx-auto" src={image4} alt="" />
              <p className="font-semibold mt-3F">
                Tours. Bookings. Adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurParters;
