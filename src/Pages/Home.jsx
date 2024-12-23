import { useEffect } from "react";
import Banner from "../components/Banner";
import FeaturedService from "../components/FeaturedService";
import OurParters from "./OurParters";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
      }, []);
  return (
    <>
      <Banner></Banner>
      <FeaturedService></FeaturedService>
      <OurParters></OurParters>
    </>
  );
};

export default Home;
