import { useContext, useState } from "react";
import { IoMdClose, IoIosMenu, IoMdSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleLogOut = () => {
    logOut();
  };
  let Links = [
    { name: "HOME", link: "/" },
    { name: "All Toys", link: "/all-toys" },
    { name: "My Toys", link: "/my-toys" },
    { name: "Add a Toy", link: "/add-toy" },
    { name: "Blog", link: "/blog" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0  left-0 z-10 ">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <Link to="/">
            <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
            TOYFINITY
          </Link>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={`${link.link}`}
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`form-control md:pb-0 pb-12 absolute  z-[-1] right-0 w-1/2 transition-all  duration-500 ease-in ${
            showSearchBar ? "top-24 right-6" : "top-[-490px]"
          }`}
        >
          <input
            className="input input-bordered"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>
        <div className="flex items-center gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl cursor-pointer md:hidden"
          >
            {open ? <IoMdClose></IoMdClose> : <IoIosMenu></IoIosMenu>}
          </div>
          <div
            onClick={() => setShowSearchBar(!showSearchBar)}
            className="text-2xl  cursor-pointer "
          >
            <IoMdSearch></IoMdSearch>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    title={`${user?.displayName} (to logOut click this image)`}
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
