//library imports
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

//components imports

import ProductBox from "../../components/ProductBox/ProductBox";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../apis/fakeStoreApis";

//css
import "./ProductList.css";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";

function ProductList() {
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
  }, [query.get("category")]);

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
            <FilterSidebar />
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
                  category={query.get("category")}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
