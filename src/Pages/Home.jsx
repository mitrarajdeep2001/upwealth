import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Aboutus from "../Components/Aboutus";

const Home = () => {
  return (
    <>
      <div className="nav_hero_img bg-no-repeat h-full">
        <Navbar />
        <Hero />
      </div>
      <Aboutus />
    </>
  );
};

export default Home;
