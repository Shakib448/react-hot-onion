import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Category from "./Components/Category/Category";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Category />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
