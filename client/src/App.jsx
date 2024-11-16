import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" exact element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
         </Routes>
      </Router>
   );
};

export default App;
