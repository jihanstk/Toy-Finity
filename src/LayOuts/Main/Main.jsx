import { Outlet } from "react-router-dom";
import NavBar from "../../components/Shared/NavBar/NavBar";
import Footer from "../../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-24 min-h-screen">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
