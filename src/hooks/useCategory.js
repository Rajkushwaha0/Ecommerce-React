import { useState, useEffect } from "react";
import axios from "axios";
import { getAllCategories } from "../apis/fakeStoreApis";

function useCategory() {
  const [categories, setCategories] = useState([]);

  // console.log(getAllCategories());
  async function downloadCategories() {
    const response = await axios.get(getAllCategories());
    // console.log(response.data);
    setCategories(response.data);
  }
  useEffect(() => {
    downloadCategories();
  }, []);

  return categories;
}

export default useCategory;
