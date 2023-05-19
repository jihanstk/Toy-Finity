import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const singlePageData = useLoaderData();
  const { toyName, photo, price } = singlePageData;
  return (
    <div className="w-11/12 mx-auto my-24">
      <div className="w-full h-1/2 flex gap-10 items-center border-2">
        <div>
          <img className="w-[700px] h-[500px]" src={photo} alt="" />
        </div>
        <div className="p-10">
          <h1 className="text-3xl font-bold">
            {toyName}
            <br />
            <span className="text-lg font-semibold text-slate-500">
              {price}
            </span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
