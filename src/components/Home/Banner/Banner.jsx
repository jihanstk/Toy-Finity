import { useEffect } from "react";
import bannerImg from "../../../assets/image/pexels-polesie-toys-6132059.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative">
      <img className="h-[90vh] w-full" src={bannerImg} alt="" />
      <div className=" w-full h-full bg-black/70 absolute top-0 flex items-center justify-center ">
        <div className="md:w-1/2 p-3  text-center">
          <h1
            className="text-white  md:text-5xl text-5xl font-bold"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            All Toys For Your kids
          </h1>
          <p
            className="text-slate-400 my-5"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            Welcome to Toyfinity, the ultimate realm of limitless play! Step
            into a world where imagination knows no bounds and where toys come
            to life in enchanting ways.
          </p>
          <button
            className="btn btn-error"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
