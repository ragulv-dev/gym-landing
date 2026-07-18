import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Classes from "./pages/Classes";
import Membership from "./pages/Membership";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Features />
            <Classes />
            <Membership />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
