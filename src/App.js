import "./App.css";
import React from "react";
//import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/categories/:categoryName" element={<PhotoGallery />} />
      </Routes>
      <Footer />{" "}
    </>
  );
}

export default App;
