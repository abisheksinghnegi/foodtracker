import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LogFood from "./components/LogFood";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Snacks from "./components/Snacks";
import Dinner from "./components/Dinner";
import TotalIntake from "./components/TotalIntake";
import About from "./components/About";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/log-food" element={<LogFood />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/snacks" element={<Snacks />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/total-intake" element={<TotalIntake />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
