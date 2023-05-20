import { useEffect, useState } from "react";

import AllToyRow from "./AllToyRow";
import { IoMdSearch } from "react-icons/io";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllToys = () => {
  //   const { user } = useContext(AuthContext);
  const [myToys, setMytoys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMytoys(null);
    setLoading(true);
    fetch(`http://localhost:5021/all-toys`)
      .then((res) => res.json())
      .then((data) => {
        setMytoys(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  if (loading) {
    return (
      <progress className="progress w-56 relative top-3/4 left-1/2"></progress>
    );
  }
  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      <div
        className={`form-control md:pb-0 pb-12 relative md:w-6/12 w-full mx-auto `}
      >
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="input input-bordered w-10/12 "
          type="text"
          name="search"
          placeholder="search"
        />
        <IoMdSearch className=" absolute md:right-32 right-24 top-3 text-2xl font-bold"></IoMdSearch>
        {/* <input
            type="submit"
            value="Search"
            className="btn bg-transparent bordered text-black hover:bg-slate-300"
          /> */}
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Photo</th>

            <th>Name</th>
            <th>Seller</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {myToys
            ?.filter((myToy) => myToy.toyName.toLowerCase().includes(search))
            .map((myToy) => (
              <AllToyRow key={myToy._id} myToy={myToy}></AllToyRow>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
