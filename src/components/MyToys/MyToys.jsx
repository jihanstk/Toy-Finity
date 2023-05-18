import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyRow from "./MyToyRow/MyToyRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMytoys] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteMyToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5021/my-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((mytoy) => mytoy._id !== id);
              setMytoys(remaining);
            }
          });
      }
    });
  };
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5021/my-toys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMytoys(data);
        setLoading(false);
        console.log(data);
      });
  }, [user]);

  if (loading) {
    return (
      <progress className="progress w-56 relative top-3/4 left-1/2"></progress>
    );
  }
  return (
    <div className="overflow-x-auto w-full">
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
            <MyToyRow
              key={myToy._id}
              myToy={myToy}
              handleDeleteMyToy={handleDeleteMyToy}
            ></MyToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
