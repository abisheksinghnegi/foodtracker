import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/log-food">Log Food</Link></li>
                <li><Link to="/breakfast">Breakfast</Link></li>
                <li><Link to="/lunch">Lunch</Link></li>
                <li><Link to="/snacks">Snacks</Link></li>
                <li><Link to="/dinner">Dinner</Link></li>
                <li><Link to="/total-intake">Total</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
