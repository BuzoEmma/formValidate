import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Form from "./Components/Form";

// import {} from 'react-icons/'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Footer />} />
    </Routes>
  );
};

export default App;
