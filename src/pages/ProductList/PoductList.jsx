import ProductBox from "../../components/ProductBox/ProductBox";
import "./ProductList.css";

function ProductList() {
  const minOption = [0, 10, 20, 50, 100, 200];
  const maxOption = [0, 100, 200, 500, 800, 1000];
  return (
    <div className="product-list-wrapper">
      <div className="product-list-container">
        <h2>All Products</h2>
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
                <div className="category">Jwellery</div>
                <div className="category">Clothes</div>
                <div className="category">Electronics</div>
                <div className="category">Phone</div>
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
            <ProductBox
              productImage="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/6257ec77a5eb90b45167d7b1_607ec34ab018c9feb781d314_5.jpeg"
              name="Bag"
              price="1200"
              productId="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;

{
  /* <ProductBox
        productImage="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/6257ec77a5eb90b45167d7b1_607ec34ab018c9feb781d314_5.jpeg"
        name="Bag"
        price="1200"
        productId="1"
      /> */
}
