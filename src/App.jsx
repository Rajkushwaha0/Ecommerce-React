import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Header color="light" light={true} container="fluid" expand="md" />
      <Slider slide={true} />
      <Footer />
    </>
  );
}

export default App;
