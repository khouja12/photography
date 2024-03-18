import React from "react";

// import components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// import router
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

// import motion

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div style={{ display: "inline-block" }}>
          <AnimRoutes />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
