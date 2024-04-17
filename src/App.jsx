import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header
        color="light"
        light={true}
        container="fluid"
        expand="md"
        fixed="top"
      />
    </>
  );
}

export default App;
