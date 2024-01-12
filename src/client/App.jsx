import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import  './App.css';
import React, { useState } from "react";

const App = () => {
  const [currentForm, setCurrentForm] = useState('LandingPage');
  return (


    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </Router>
  );
}

export default App;