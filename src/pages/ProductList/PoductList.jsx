import useCategory from "../../hooks/useCategory";
import ProductBox from "../../components/ProductBox/ProductBox";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../apis/fakeStoreApis";

import axios from "axios";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

//css
import "./ProductList.css";

function ProductList() {
  const minOption = [0, 10, 20, 50, 100, 200];
  const maxOption = [0, 100, 200, 500, 800, 1000];

  const categories = useCategory();
  const [query] = useSearchParams();
  const [allProduct, setAllProduct] = useState(null);

  async function downloadAllProduct(category) {
    const downloadURL = category
      ? getAllProductsByCategory(category)
      : getAllProducts();
    const response = await axios.get(downloadURL);
    setAllProduct(response.data);
  }

  useEffect(() => {
    downloadAllProduct(query.get("category"));
  }, []);
  return (
    <div className="product-list-wrapper">
      <div className="product-list-container">
        <h2>
          {query.get("category")
            ? query.get("category").charAt(0).toUpperCase() +
              query.get("category").slice(1)
            : "All Products"}
        </h2>
        <div className="product-list-divider">
          {/* left side  */}
          <div className="left-divider">
            <div className="left-wrapper">
              <div className="sidebar-text search-text">Search Products</div>
              <div className="search-input">
                <input type="text" placeholder="Search by name" />
              </div>
              <div className="sidebar-text category-text">Categories</div>
              <div className="category-product-list">
                {categories.map((category) => (
                  <div className="category">{category}</div>
                ))}
              </div>
              <div class="sidebar-text">Filter by price</div>
              <div class="price-filter">
                <div class="price-filter-select">
                  <div class="form-group">
                    <select name="minPrice" class="form-select" id="minPrice">
                      {minOption.map((opt) => {
                        return <option key={opt}>{opt}</option>;
                      })}
                    </select>
                  </div>
                  <div class="form-group">
                    <select name="maxPrice" class="form-select" id="maxPrice">
                      {maxOption.map((opt) => {
                        return <option key={opt}>{opt}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div class="price-filter-title ">
                  <div id="price-filter-label-min">Min Price</div>
                  <div id="price-filter-label-max">Max Price</div>
                </div>
              </div>
              <button class="btn btn-warning clear-filter" id="search">
                Search
              </button>
              <button class="btn btn-danger clear-filter" id="clear">
                Clear Filters
              </button>
            </div>
          </div>
          {/* right side  */}
          <div className="right-divider">
            {allProduct &&
              allProduct.map((product) => (
                <ProductBox
                  productImage={product.image}
                  name={product.title}
                  price={product.price}
                  productId={product.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
