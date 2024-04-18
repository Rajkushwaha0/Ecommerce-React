import { Link } from "react-router-dom";

import "./CategoryItem.css";
function CategoryItem({ itemName }) {
  return (
    <div className="category-item d-flex align-items-center justify-content-center">
      <Link to={"/product"}>{itemName}</Link>
    </div>
  );
}

export default CategoryItem;
