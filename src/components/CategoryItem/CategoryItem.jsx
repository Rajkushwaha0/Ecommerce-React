import { useNavigate } from "react-router-dom";

import "./CategoryItem.css";
function CategoryItem({ itemName, filters = "" }) {
  const navigator = useNavigate();

  return (
    <div
      className="category-item d-flex align-items-center justify-content-center"
      onClick={() => navigator(`/product?category=${filters}`)}
    >
      {itemName}
    </div>
  );
}

export default CategoryItem;
