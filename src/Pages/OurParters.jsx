import { Button } from "@material-tailwind/react";
import image1 from "../assest/images/2.png";
import image2 from "../assest/images/3.png";
import image3 from "../assest/images/5.png";
import image4 from "../assest/images/6.png";
const OurParters = () => {
  return (
    <div className=" py-20">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:text-end text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              We Work With the <br />
              Best Partners
            </h1>
            <p>
              While we are at the forefront of and specialize in design-build,
              we are very familiar with a number of delivery methods and are
              confident we can find the process that will best help you meet
              your goals.
            </p>
            <Button
              className="mt-6 font-bold text-lg rounded-none border-2"
              variant="outlined"
              size="lg"
            >
              View More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 justify-items-center">
            <div className="text-center mx-auto">
              <img className="max-w-28 mx-auto" src={image1} alt="" />
              <p className="font-semibold mt-3F">Software. Gadgets. Innovation.</p>
            </div>
            <div className="text-center mx-auto md:mt-20">
              <img className="max-w-28 mx-auto" src={image2} alt="" />
              <p className="font-semibold mt-3F">Clothing. Accessories. Styling.</p>
            </div>
            <div className="text-center mx-auto md:-mt-20">
              <img className="max-w-28 mx-auto" src={image3} alt="" />
              <p className="font-semibold mt-3F">Research. Solutions. Advancement.</p>
            </div>
            <div className="text-center mx-auto">
              <img className="max-w-28 mx-auto" src={image4} alt="" />
              <p className="font-semibold mt-3F">Tours. Bookings. Adventures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurParters;
