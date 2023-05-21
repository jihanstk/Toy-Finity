import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <h3 className="text-2xl font-bold flex items-center">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrnTCDQ5iQnUFAlJNvKwngfJe-5IomRPIkA&usqp=CAU"
              alt=""
            />
          </span>
          TOYFINITY
        </h3>
        <p>
          TOY Marketplace
          <br />
          Providing reliable & Heigh Quality Toys.
        </p>
      </div>
      <div className=" mx-auto text-center">
        <span className="footer-title">Navigations</span>
        <ul>
          <li className=" my-2">
            <Link to="/">Home</Link>
          </li>
          <li className=" my-2">
            <Link to="/all-toys">All Toys</Link>
          </li>

          {user ? (
            <>
              <li className=" my-2">
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li className=" my-2">
                <Link to="add-toy">Add a Toy</Link>
              </li>
            </>
          ) : (
            ""
          )}
          <li className=" my-2">
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className=" mx-auto text-center">
        <span className="footer-title">Contact</span>
        <p>Satkhira, khulna, bangladesh</p>
        <p>Phone : 01000000000</p>
      </div>
      <div className=" mx-auto text-center">
        <span className="footer-title">Social Pages</span>
        <a
          href="https://www.facebook.com"
          target="blank"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com"
          target="blank"
          className="link link-hover"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com"
          target="blank"
          className="link link-hover"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
