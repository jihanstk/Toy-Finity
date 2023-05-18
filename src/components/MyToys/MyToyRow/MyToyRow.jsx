import { Link } from "react-router-dom";

const MyToyRow = ({ myToy, handleDeleteMyToy }) => {
  const { _id, toyName, photo, seller, price, quantity, rating, category } =
    myToy;
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteMyToy(_id)}
            className="btn btn-circle w-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                className=""
                src={photo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <strong>{toyName}</strong>
      </td>
      <td>{seller}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <th>
        <Link to={`/update-toy/${_id}`}>Update</Link>
      </th>
    </tr>
  );
};

export default MyToyRow;
