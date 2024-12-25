import { useEffect } from "react";
import Banner from "../components/Banner";
import FeaturedService from "../components/FeaturedService";
import OurParters from "./OurParters";
import ImproveBusiness from "./ImproveBusiness";
import OurApp from "./OurApp";
import Activity from "../components/Activity";

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
      <Activity></Activity>
      <OurApp></OurApp>
    </>
  );
};

export default Home;
