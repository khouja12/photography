import React from "react";
import Home from "./../pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./../pages/About";
import Portfolio from "./../pages/Portfolio";
import Contact from "./../pages/Contact";
import { AnimatePresence } from "framer-motion";
import Baby from "../pages/baby/Baby";
import LifeStyle from '../pages/lifeStyle/LifeStyle';
import Wedding from "../pages/wedding/Wedding";
const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Baby" element={<Baby />} />
        <Route path="/lifeStyle" element={<LifeStyle/>} />
        <Route path="/Wedding" element={<Wedding/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
