import { IoIosPlayCircle } from "react-icons/io";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const ChildrenVideo = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="my-24 relative"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <img
        className="rounded-xl"
        src="https://cdn.shopify.com/s/files/1/1152/4590/files/video_1903x_68d6b0d8-8a04-4667-a075-a616bab789ef.jpg?v=1676955196"
        alt=""
      />
      <div className="absolute top-1/4 left-0 w-full ">
        <div className="md:w-1/2 mx-auto">
          <h1 className="md:text-5xl   text-center font-bold text-white mx-auto">
            We make your children happier with the best toys
          </h1>
          <div className="w-1/4 mx-auto">
            {/* <button className="md:text-7xl text-4xl text-orange-700 btn btn-ghost">
              <IoIosPlayCircle></IoIosPlayCircle>
            </button> */}
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="">
              <IoIosPlayCircle className="md:text-7xl text-4xl text-orange-700 cursor-pointer mx-auto mt-4"></IoIosPlayCircle>
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label
              htmlFor="my-modal-4"
              className="modal flex-none w-full  cursor-pointer"
            >
              <label className=" relative " htmlFor="">
                <iframe
                  className="rounded-xl youtube "
                  width="800"
                  height="500"
                  src="https://www.youtube.com/embed/MIpQKMlZY1g"
                  title="kids toy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenVideo;
