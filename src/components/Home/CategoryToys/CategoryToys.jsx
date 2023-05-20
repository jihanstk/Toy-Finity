import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import SingleTabPanel from "./singleTabPanel/SingleTabPanel";

const CategoryToys = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState([]);
  const [tabText, setTabText] = useState("sport");

  console.log(tabText);
  const handleTab = (name) => {
    setTabText("");
    setTabText(name);
  };
  useEffect(() => {
    setCategoryData(null);
    fetch(`http://localhost:5021/category-data?category=${tabText}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
        console.log(data);
      });
  }, [tabText]);
  useEffect(() => {
    fetch(`http://localhost:5021/all-toys`)
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [];

        data.forEach((toy) => {
          if (!uniqueCategories.includes(toy.category)) {
            uniqueCategories.push(toy.category);
          }
        });

        setCategory(uniqueCategories);
        console.log(uniqueCategories);
      });
  }, []);
  return (
    <div className="my-24 text-center">
      <div className="my-10">
        <h1 className="text-4xl font-bold">Shop By Category</h1>
        <p className="md:w-1/2 mx-auto text-slate-600 my-3">
          You Can shop By category Wise Its easy to identify you desired
          products
        </p>
      </div>
      <Tabs>
        <TabList>
          {category?.map((cat, index) => {
            return (
              <Tab onClick={() => handleTab(cat)} key={index}>
                {cat}
                {/* {console.log(e.target.value)} */}
              </Tab>
            );
          })}
        </TabList>
        {category?.map((cat, index) => {
          return (
            <TabPanel key={index}>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {categoryData?.map((catItem) => (
                  <SingleTabPanel
                    key={catItem._id}
                    data={catItem}
                  ></SingleTabPanel>
                ))}
              </div>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default CategoryToys;
