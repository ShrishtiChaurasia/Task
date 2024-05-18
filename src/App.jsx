import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Filterform from "./Components/Form/Filterform";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Filterform />
      <h4>Footer!</h4>
      <Footer />
    </>
  );
}

export default App;
