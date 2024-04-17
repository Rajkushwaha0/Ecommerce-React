import CategoryItem from "../../components/CategoryItem/CategoryItem";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
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
            <CategoryItem itemName="Electronics" />
            <CategoryItem itemName="Clothes" />
            <CategoryItem itemName="Grocery" />
            <CategoryItem itemName="Ornaments" />
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
