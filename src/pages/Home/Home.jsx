import { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import Slider from "../../components/Slider/Slider";
import { getAllCategories } from "../../apis/fakeStoreApis";
import "./Home.css";
import useCategory from "../../hooks/useCategory";

function Home() {
  const categories = useCategory();
  // console.log(categories);
  return (
    <>
      <Slider />
      <div className="container">
        <div className="row">
          <h2 className="home-title text-center">Welcome to Bharat Cart</h2>
          <div
            className="category-list d-flex flex-row justify-content-between align-items-center"
            id="categoryList"
          >
            <CategoryItem itemName="All Products" />
            {categories &&
              categories.map((category) => (
                <CategoryItem
                  itemName={category}
                  key={category}
                  filters={category}
                />
              ))}
          </div>

          <div className="category-title text-center">
            Select a category to start Shopping
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
