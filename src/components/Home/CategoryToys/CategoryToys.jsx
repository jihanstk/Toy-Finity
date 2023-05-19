import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const CategoryToys = () => {
  const [tabText, setTabText] = useState("sport");
  const [categoryData, setCategoryData] = useState([]);

  const handleTab = (name) => {
    setTabText("");
    setTabText(name);
  };
  useEffect(() => {
    fetch(`http://localhost:5021/category-data?category=${tabText}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
        console.log(data);
      });
  }, [tabText]);
  return (
    <div className="my-24 text-center">
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTab("sport")}>Sport</Tab>
          <Tab onClick={() => handleTab("ambulance")}>Ambulance</Tab>
          <Tab onClick={() => handleTab("sweet")}>Sweet</Tab>
          <Tab onClick={() => handleTab("old")}>Old</Tab>
        </TabList>
        <div className="text-center">
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {categoryData.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="card w-96 bg-base-100 shadow-xl"
                  >
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
                          value={data.rating}
                          edit={false}
                          size={14}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="text-slate-500"
                        />
                        <span className="text-orange-700 font-bold ">
                          {data.rating}
                        </span>
                      </div>
                      <div className="card-actions justify-center">
                        <Link to={`/details-toy/${data._id}`}>
                          <button className="btn btn-error">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {categoryData.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="card w-96 bg-base-100 shadow-xl"
                  >
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
                          value={data.rating}
                          edit={false}
                          size={14}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="text-slate-500"
                        />
                        <span className="text-orange-700 font-bold ">
                          {data.rating}
                        </span>
                      </div>
                      <div className="card-actions justify-center">
                        <Link to={`/details-toy/${data._id}`}>
                          <button className="btn btn-error">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {categoryData.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="card w-96 bg-base-100 shadow-xl"
                  >
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
                          value={data.rating}
                          edit={false}
                          size={14}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="text-slate-500"
                        />
                        <span className="text-orange-700 font-bold ">
                          {data.rating}
                        </span>
                      </div>
                      <div className="card-actions justify-center">
                        <Link to={`/details-toy/${data._id}`}>
                          <button className="btn btn-error">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {categoryData.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="card w-96 bg-base-100 shadow-xl"
                  >
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
                          value={data.rating}
                          edit={false}
                          size={14}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="text-slate-500"
                        />
                        <span className="text-orange-700 font-bold ">
                          {data.rating}
                        </span>
                      </div>
                      <div className="card-actions justify-center">
                        <Link to={`/details-toy/${data._id}`}>
                          <button className="btn btn-error">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryToys;
