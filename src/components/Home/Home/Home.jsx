import Banner from "../Banner/Banner";
import CategoryToys from "../CategoryToys/CategoryToys";
import ChildrenVideo from "../ChildrenVideo/ChildrenVideo";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <CategoryToys></CategoryToys>
        <Gallery></Gallery>
        <ChildrenVideo></ChildrenVideo>
      </div>
    </div>
  );
};

export default Home;
