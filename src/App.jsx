import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
