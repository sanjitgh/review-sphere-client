import { useEffect } from "react";
import Banner from "../components/Banner";
import FeaturedService from "../components/FeaturedService";
import OurParters from "./OurParters";
import ImproveBusiness from "./ImproveBusiness";
import OurApp from "./OurApp";

const Home = () => {
  useEffect(() => {
    document.title = "Home | ReviewSphere";
  }, []);
  return (
    <>
      <Banner></Banner>
      <FeaturedService></FeaturedService>
      <OurParters></OurParters>
      <ImproveBusiness></ImproveBusiness>
      <OurApp></OurApp>
    </>
  );
};

export default Home;
