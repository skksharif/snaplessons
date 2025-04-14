import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Slideshow from "./components/Slideshow";
import Testimonials from "./components/Testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Clients from "./components/Clients";
import ScrollToTop from "./components/ScrollToTop";
import MainCourses from "./components/MainCourses";
function App() {
  return (
    <div className="home-container">
      <a 
        href="https://wa.me/+918500796763"
        class="whatsapp-button"
        target="_blank"
      >
        <img src="./images/icons/whatsapp.png" alt="WhatsApp" />
      </a>

      <Header />
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<MainCourses />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
