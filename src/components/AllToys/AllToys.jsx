import { useEffect, useState } from "react";

import AllToyRow from "./AllToyRow";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllToys = () => {
  //   const { user } = useContext(AuthContext);
  const [myToys, setMytoys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5021/all-toys")
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
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
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
          {myToys?.map((myToy) => (
            <AllToyRow key={myToy._id} myToy={myToy}></AllToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
