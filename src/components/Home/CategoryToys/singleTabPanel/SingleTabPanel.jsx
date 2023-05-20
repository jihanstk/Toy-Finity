import "react-tabs/style/react-tabs.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SingleTabPanel = ({ data }) => {
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-[300px]">
          <img src={data.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.toyName}</h2>
          <p className="text-left">Price : {data.price}</p>
          <div className="flex items-center gap-2 my-3">
            <ReactStars
              classNames="text-slate-500 inline"
              count={5}
              value={parseFloat(data.rating)}
              edit={false}
              size={14}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="text-slate-500"
            />
            <span className="text-orange-700 font-bold ">{data.rating}</span>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/details-toy/${data._id}`}>
              <button className="btn btn-error">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTabPanel;
