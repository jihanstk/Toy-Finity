import { useContext, useState } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [showSearchBar, setShowSearchBar] = useState(false);
  const handleLogOut = () => {
    logOut();
  };

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0  left-0 z-20 ">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <Link className="flex items-center" to="/">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <img
                className="w-10 h-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrnTCDQ5iQnUFAlJNvKwngfJe-5IomRPIkA&usqp=CAU"
                alt=""
              />
            </span>
            TOYFINITY
          </Link>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              onClick={() => setOpen(false)}
              to="/all-toys"
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              All Toys
            </NavLink>
          </li>

          {user ? (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(false)}
                  to="my-toys"
                  className={({ isActive }) =>
                    isActive ? "text-orange-700" : ""
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(false)}
                  to="add-toy"
                  className={({ isActive }) =>
                    isActive ? "text-orange-700" : ""
                  }
                >
                  Add a Toy
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              onClick={() => setOpen(false)}
              to="blog"
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl cursor-pointer md:hidden"
          >
            {open ? <IoMdClose></IoMdClose> : <IoIosMenu></IoIosMenu>}
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
