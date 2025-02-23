import React from "react";
import "../styles/Home.css";
import eat from '../images/eat.png'
import { div } from "framer-motion/client";

const Home = () => {
    return (
        <div>
        <div id="home">
            <div className="wrapper">
                <div className="image-wrapper">
                    <img id="img" src={eat} alt="Food" />
                </div>
                <div className="header-wrapper">
                    <h1 className="text">FOOD</h1>
                    <h1 className="text">Tracker</h1>
                </div>
            </div>
            <div id="con">
            <main className="btn-wrapper">
                <div id="btn">

                <button id="button">
                    <div>
                        <span>CALORIES</span>
                    </div>
                </button>
                <button id="button">
                    <div>
                        <span>PROTIEN</span>
                    </div>
                </button>
                <button id="button">
                    <div>
                        <span>&OTHERS</span>
                    </div>
                </button>
                </div>
            
             </main>
            </div>
            </div>
            <nav className="navbar2">
        <h1 className="logo2">CALZONE</h1>
        <div className="navbar-container2">
          <ul className="navbar-links2">
                <li className="navbar-link2">
                    <a href="/">HOME</a>
                </li>
                <li className="navbar-link2">
                    <a href="">Log Food</a>
                </li>
                <li className="navbar-link2">
                    <a href="/breakfast">Breakfast</a>
                </li>
                <li className="navbar-link2">
                    <a href="/lunch">Lunch</a>
                </li>
                <li className="navbar-link2">
                    <a href="/snacks">Snacks</a>
                </li>
                <li className="navbar-link2">
                    <a href="/dinner">Dinner</a>
                </li>
                <li className="navbar-link2">
                    <a href="/total-intake">Total</a>
                </li>
                <li className="navbar-link2">
                    <a href="/about">About</a>
                </li>
          </ul>
        </div>
        
      </nav>

      <div id="hover">
        <div id="phase">
          <h1 id="phase2">CALZONE</h1>
        </div>
        <div id="divd">
          <div id="dis">
            <h2 className="last-tt">REACT BASED</h2>
            <h2 id="a" className="last-tt">FRONTEND PROJECT</h2>
            <br />
            <br />
            <h2 id="b" className="last-tt">USED API</h2>
            <h2 id="c" className="last-tt">FIREBASE CONSOLE & NUTRITIONIX</h2>
          </div>
          <div id="finaldiv">
            <div>
              <h4 className="socials">MAIL</h4>
              <br />
              <h4 className="socials">Linkedin</h4>
            </div>
            <div>
              <h4 className="socials">abhishekofficial1910@gmail.com</h4>
              <br />
              <h4 className="socials">Abishek Singh Negi</h4>
            </div>
            <div id="lastside">
              <h4 id="lastside">&copy;Legals</h4>
            </div>
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default Home;
