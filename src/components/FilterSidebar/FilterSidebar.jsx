import useCategory from "../../hooks/useCategory";

import { useNavigate } from "react-router-dom";

//css
import "./FilterSidebar.css";

function FilterSidebar() {
  const minOption = [0, 10, 20, 50, 100, 200];
  const maxOption = [0, 100, 200, 500, 800, 1000];

  const navigator = useNavigate();
  const categories = useCategory();

  function handleCategoryNavigate(category) {
    navigator(`/product?category=${category}`);
  }

  return (
    <div className="left-wrapper">
      <div className="sidebar-text search-text">Search Products</div>
      <div className="search-input">
        <input type="text" placeholder="Search by name" />
      </div>
      <div className="sidebar-text category-text">Categories</div>
      <div className="category-product-list">
        {categories.map((category) => (
          <div
            onClick={() => handleCategoryNavigate(category)}
            className="category"
          >
            {category}
          </div>
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
  );
}

export default FilterSidebar;
