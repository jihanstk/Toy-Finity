import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { titleName } from "../../TitleName/TitleName";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  titleName("Add A toy");
  const handleSubmitToy = (event) => {
    // form select
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value.toLowerCase();
    const email = form.email.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const category = form.category.value.toLowerCase();
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const toyData = {
      toyName,
      photo,
      seller,
      category,
      price,
      rating,
      quantity,
      details,
      email,
    };
    console.log(toyData);
    // post data via api

    fetch("https://toy-finity-server.vercel.app/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="md:w-10/12 mx-auto w-full   bg-base-200 my-32">
        <div className="hero-content flex-col w-full ">
          <h1 className="text-5xl font-bold ">Add A toy </h1>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmitToy}>
              <div className="card-body">
                <div className="add-toy gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="toyName"
                      placeholder="Toy Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Photo URl</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Photo"
                      name="photo"
                      className="input input-bordered"
                    />
                  </div>
                </div>{" "}
                <div className="add-toy gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="seller"
                      placeholder="Seller Name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                    />
                  </div>
                </div>{" "}
                <div className="add-toy gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="price"
                      placeholder="Price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <select
                      className="border-2 border-slate-400 p-3 rounded-xl"
                      name="rating"
                      id=""
                      required
                    >
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="2">2</option>
                      <option value="2.5">2.5</option>
                      <option value="3">3</option>
                      <option value="3.5">3.5</option>
                      <option value="4">4</option>
                      <option value="4.5">4.5</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>{" "}
                <div className="add-toy gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="quantity"
                      placeholder="Available Quantity"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Sub Category Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="category"
                      name="category"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Description About Toy</span>
                  </label>
                  <textarea
                    className="border-2 p-5"
                    name="details"
                    placeholder="Write Description Here ..."
                    cols="50"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add A toy"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAToy;
