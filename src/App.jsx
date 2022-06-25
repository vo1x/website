import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Post1 from "./components/blog/posts/hello-world";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hello-world" element={<Post1 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
