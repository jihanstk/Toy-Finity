import { Link } from "react-router-dom";

const AllToyRow = ({ myToy }) => {
  const { _id, toyName, photo, seller, price, quantity, rating, category } =
    myToy;
  return (
    <tr>
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
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <th>
        <Link to={`/details-toy/${_id}`}>Details</Link>
      </th>
    </tr>
  );
};

export default AllToyRow;
