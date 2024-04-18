import ProductBox from "../../components/ProductBox/ProductBox";
import "./ProductList.css";

function ProductList() {
  return (
    // <div class="product-listcontainer">
    //   <div class="row">
    //     <h2 class="product-list-title text-center">All Products</h2>

    //     <div class="product-list-wrapper d-flex flex-row">
    //       <div class="product-list-sidebar d-flex flex-column">
    //         <div class="sidebar-title">Search Products</div>
    //         <div class="sidebar-search form-group">
    //           <input
    //             type="text"
    //             placeholder="Search by name"
    //             class="form-control"
    //             id="searchInput"
    //           />
    //         </div>

    //         <div class="sidebar-title fw-bold">Categories</div>
    //         <div id="categoryList"></div>

    //         <div class="sidebar-title">Filter by price</div>
    //         <div class="price-filter">
    //           <div class="price-filter-select d-flex flex-row justify-content-between">
    //             <div class="form-group">
    //               <select name="minPrice" class="form-select" id="minPrice">
    //                 <option value="0">0</option>
    //                 <option value="10">10</option>
    //                 <option value="20">20</option>
    //                 <option value="50">50</option>
    //                 <option value="100">100</option>
    //                 <option value="200">200</option>
    //               </select>
    //             </div>
    //             <div class="form-group">
    //               <select name="maxPrice" class="form-select" id="maxPrice">
    //                 <option value="0">0</option>
    //                 <option value="10">10</option>
    //                 <option value="20">20</option>
    //                 <option value="50">50</option>
    //                 <option value="100">100</option>
    //                 <option value="200">200</option>
    //                 <option value="1000">1000</option>
    //               </select>
    //             </div>
    //           </div>
    //           <div class="price-filter-title d-flex flex-row justify-content-start">
    //             <div id="price-filter-label-min">Min Price</div>
    //             <div id="price-filter-label-max">Max Price</div>
    //           </div>
    //         </div>
    //         <button class="btn btn-warning clear-filter" id="search">
    //           Search
    //         </button>
    //         <button class="btn btn-danger clear-filter" id="clear">
    //           Clear Filters
    //         </button>
    //       </div>
    //       <div class="product-list-box" id="productList">
    //         <a
    //           href="productDetails.html"
    //           target="_blank"
    //           class="product-item text-decoration-none d-inline-block"
    //         >
    //           <div class="product-img">
    //             <img src="img/product.jpg" alt="" />
    //           </div>
    //           <div class="product-name text-center">Some product</div>
    //           <div class="product-price text-center">&#8377; 10000</div>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
                      <option value="0">0</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select name="maxPrice" class="form-select" id="maxPrice">
                      <option value="0">0</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="1000">1000</option>
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
