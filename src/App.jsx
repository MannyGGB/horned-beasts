import "./App.css";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./assets/data.json";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showSelectedBeast, setSelectedBeast] = useState(false);
  function handleShowSelectedBeast() {
    setSelectedBeast(!showSelectedBeast);
  }

  return (
    <>
      <Header />
      <Gallery data={data} />
      {showSelectedBeast && <SelectedBeast onClick={handleShowSelectedBeast} />}
      <Footer />
    </>
  );
}

export default App;
