import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "../src/Componeents/Navbar";
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import Education from "./Scenes/Education";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
