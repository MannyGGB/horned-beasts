import "./App.css";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./assets/data.json";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showSelectedBeast, setSelectedBeast] = useState(false);
  const [toggleImage, setImage] = useState({});
  const [horns, setHorns] = useState("all");

  function handleShowSelectedBeast(beast) {
    setSelectedBeast(!showSelectedBeast);
    setImage(beast);
  }

  function handleChange(event) {
    setHorns(event.target.value);
  }

  return (
    <>
      <Header />
      <Form handleChange={handleChange} />
      <Gallery
        data={data}
        horns={horns}
        handleShowSelectedBeast={handleShowSelectedBeast}
      />
      {showSelectedBeast && (
        <SelectedBeast
          handleShowSelectedBeast={handleShowSelectedBeast}
          toggleImage={toggleImage}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
