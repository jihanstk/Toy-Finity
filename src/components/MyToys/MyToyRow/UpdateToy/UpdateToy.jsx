import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { titleName } from "../../../../TitleName/TitleName";

const UpdateToy = () => {
  const UpdateData = useLoaderData();
  titleName("Update-Toy");
  console.log(UpdateData);
  const {
    _id,
    price,
    quantity,
    details,
    seller,
    email,
    toyName,
    category,
    rating,
  } = UpdateData;

  const handleUpdateToy = (event) => {
    // form select
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const toyData = {
      price,
      quantity,
      details,
    };

    // post data via api

    fetch(`https://toy-finity-server.vercel.app/update-toy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toy Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="md:w-10/12 mx-auto w-full   bg-base-200 my-32">
      <div className="hero-content flex-col w-full ">
        <h1 className="text-5xl font-bold ">Update Toy </h1>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateToy}>
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
                    defaultValue={toyName}
                    disabled
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
                    disabled
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
                    defaultValue={seller}
                    disabled
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
                    defaultValue={email}
                    disabled
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
                    defaultValue={price}
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
                    defaultValue={rating}
                    disabled
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
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
                    defaultValue={quantity}
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
                    defaultValue={category}
                    disabled
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
                  defaultValue={details}
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
  );
};

export default UpdateToy;
