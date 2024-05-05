import React from "react";
import './App.css'
// import components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// import router
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

// import motion

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Header />
        <div style={{ display: "inline-block" }}>
          <AnimRoutes />
        </div>
      </Router>
      <div className="FooterApp">
      <Footer />
      </div>
    </div>
  );
};

export default App;
