import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import ReactStars from "react-rating-stars-component";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const UserTestimonial = () => {
  const [userTestimonial, setUserTestimonial] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setUserTestimonial(data));
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className=" my-24 w-10/12 mx-auto"
      data-aos="fade-up-left"
      data-aos-duration="1000"
      data-aos-offset="300"
    >
      <div className="text-center ">
        <h1 className="text-5xl font-bold">HERE OUR REVIEW</h1>
        <p className="w-1/2 mx-auto text-center mt-4 text-slate-500">
          Welcome to the Car Toys Gallery, where the world of wheels comes
          alive! rugged off-roaders, and iconic classics. Immerse yourself in
          the artistry of craftsmanship as you explore our meticulously curated
          gallery, where each car toy tells a story of speed,
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          0: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1268: {
            width: 1168,
            slidesPerView: 3,
          },
        }}
        autoplay={{
          autoplay: true,
          delay: 1000,
        }}
        navigation={{
          spaceBetween: 1000,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper my-24"
      >
        {userTestimonial.map((review, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="card w-96 h-full  bg-base-100 shadow-xl text-center mb-10">
                <figure>
                  <img
                    className="w-24 h-24 rounded-full"
                    src={review.image}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-2xl font-bold ">{review.name}</h2>
                  <div className="flex items-center gap-2 justify-center my-3">
                    <ReactStars
                      classNames="text-slate-500 inline"
                      count={5}
                      value={review.reting}
                      edit={false}
                      size={14}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <span className="text-slate-700 font-bold ">
                      {review.reting}
                    </span>
                  </div>
                  <p className="text-slate-500">
                    {review.testimonial.slice(0, 100)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default UserTestimonial;
