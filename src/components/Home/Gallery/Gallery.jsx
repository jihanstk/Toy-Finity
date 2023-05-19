import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div data-aos="fade-up-right" data-aos-duration="1000">
        <h1 className="text-5xl font-bold text-center">Recent Toy Photos</h1>
        <p className="md:w-1/2 md:mx-auto text-center text-slate-600">
          Welcome to the Car Toys Gallery, where the world of wheels comes
          alive! rugged off-roaders, and iconic classics. Immerse yourself in
          the artistry of craftsmanship as you explore our meticulously curated
          gallery, where each car toy tells a story of speed,
        </p>
      </div>
      <div className="grid md:grid-cols-2 h-1/4 overflow-y-hidden">
        <div
          className="flex relative p-6"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <img
            src="https://images.pexels.com/photos/92615/pexels-photo-92615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            className="absolute top-1/2 right-0 w-2/4"
            src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt=""
          />
        </div>
        <div
          className="grid grid-cols-2 gap-5 p-6"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <img
            src="https://images.pexels.com/photos/242200/pexels-photo-242200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            src="https://images.unsplash.com/photo-1610814651688-281e4a6ca284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/552139/pexels-photo-552139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/163546/radpanzer-model-military-vehicle-163546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
        </div>
        <div
          className="grid grid-cols-2 gap-5 p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <img
            src="https://images.pexels.com/photos/981570/pexels-photo-981570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/1102360/pexels-photo-1102360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/248849/pexels-photo-248849.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />{" "}
        </div>
        <div
          className="flex relative p-6"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <img
            src="https://images.pexels.com/photos/2065641/pexels-photo-2065641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
          <img
            className="absolute top-0 left-0 w-2/4"
            src="https://images.pexels.com/photos/9254635/pexels-photo-9254635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
