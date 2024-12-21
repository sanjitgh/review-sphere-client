import { useEffect } from "react";
import Banner from "../components/Banner";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
      }, []);
  return (
    <>
      <Banner></Banner>
    </>
  );
};

export default Home;
