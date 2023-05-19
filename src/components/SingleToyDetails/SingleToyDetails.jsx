import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SingleToyDetails = () => {
  const singlePageData = useLoaderData();
  const { toyName, photo, price, rating, seller, quantity, email, details } =
    singlePageData;
  return (
    <div className="w-11/12 mx-auto my-24">
      <div className="w-full h-1/2 md:flex gap-10 items-center border-2">
        <div>
          <img className="w-[700px] h-[500px]" src={photo} alt="" />
        </div>
        <div className="p-10">
          <h1 className="text-3xl font-bold">
            {toyName}
            <br />
            <span className="text-lg font-semibold text-slate-500">
              {seller}
            </span>
          </h1>
          <div className="flex items-center gap-2 my-3">
            <ReactStars
              classNames="text-slate-500 inline"
              count={5}
              value={rating}
              edit={false}
              size={14}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="text-slate-500"
            />
            <span className="text-orange-700 font-bold ">{rating}</span>
          </div>
          <p className="text-slate-500 my-2">
            Price: <strong>{price}</strong>{" "}
          </p>
          <p className="text-slate-500 my-2">
            Quantity: <strong>{quantity}</strong>{" "}
          </p>
          <p className="text-slate-500 my-2">Email : {email}</p>

          <button className="btn btn-block btn-primary">Buy Now</button>
        </div>
      </div>
      <h4 className=" border-b-2 border-orange-700 inline text-xl font-semibold my-6">
        Description
      </h4>
      <div className="mt-6">{details}</div>
    </div>
  );
};

export default SingleToyDetails;
