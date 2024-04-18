import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div>
      <Header color="light" light={true} container="fluid" expand="md" />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
