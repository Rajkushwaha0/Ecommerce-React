import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Header color="light" light={true} container="fluid" expand="md" />
      <Home />
      <Footer />
    </>
  );
}

export default App;
