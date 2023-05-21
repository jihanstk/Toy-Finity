import { titleName } from "../../../TitleName/TitleName";
import Banner from "../Banner/Banner";
import CategoryToys from "../CategoryToys/CategoryToys";
import ChildrenVideo from "../ChildrenVideo/ChildrenVideo";
import Gallery from "../Gallery/Gallery";
import UserTestimonial from "../UserTestimonial/UserTestimonial";

const Home = () => {
  titleName("");
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <CategoryToys></CategoryToys>
        <Gallery></Gallery>
        <UserTestimonial></UserTestimonial>
        <ChildrenVideo></ChildrenVideo>
      </div>
    </div>
  );
};

export default Home;
