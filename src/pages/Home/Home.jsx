import { useContext, useEffect } from "react";
//component
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import Slider from "../../components/Slider/Slider";
//css
import "./Home.css";
//context
import UserContext from "../../context/UserContext";
// custom hooks
import useCart from "../../hooks/useCart";
import useCategory from "../../hooks/useCategory";

function Home() {
  const categories = useCategory();

  const { user } = useContext(UserContext);
  const [cart] = useCart(user ? user.id : undefined);
  // console.log(categories);
  useEffect(() => {
    if (user) console.log("home page got user id by context", user.id);
  }, [user]);
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
