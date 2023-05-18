import bannerImg from "../../../assets/image/pexels-polesie-toys-6132059.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img className="h-[90vh] w-full" src={bannerImg} alt="" />
      <div className=" w-full h-full bg-black/70 absolute top-0 flex items-center justify-center ">
        <div className="md:w-1/2 p-3  text-center">
          <h1 className="text-white  md:text-5xl text-5xl font-bold">
            All Toys For Your kids
          </h1>
          <p className="text-slate-400 my-5">
            Welcome to Toyfinity, the ultimate realm of limitless play! Step
            into a world where imagination knows no bounds and where toys come
            to life in enchanting ways.
          </p>
          <button className="btn btn-error">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
