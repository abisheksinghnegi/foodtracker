import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty("--x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--y", `${e.clientY}px`);
  };

  return (
    <footer className="footer">
      <nav className="navbar2">
        <h1 className="logo2">PHA5E</h1>
        <div className="navbar-container2">
          <ul className="navbar-links2">
            <li className="navbar-link2">Our vision</li>
            <li className="navbar-link2">Our team</li>
            <li className="navbar-link2">Our projects</li>
            <li className="navbar-link2">Contact us</li>
            <li className="navbar-link2">FR/EN</li>
          </ul>
        </div>
      </nav>

      <div id="hover" onMouseMove={handleMouseMove}>
        <div id="phase">
          <h1 id="phase2">PHA5E</h1>
        </div>
        <div id="divd">
          <div id="dis">
            <h2 className="last-tt">3 AV.JULES CANTINI</h2>
            <h2 id="a" className="last-tt">13006 MARSEILLE</h2>
            <br />
            <br />
            <h2 id="b" className="last-tt">162 BVD MAGENTAZ</h2>
            <h2 id="c" className="last-tt">75010 PARIS</h2>
          </div>
          <div id="finaldiv">
            <div>
              <h4 className="socials">Linkedin</h4>
              <br />
              <h4 className="socials">Instagram</h4>
            </div>
            <div>
              <h4 className="socials">contact@pha5e.com</h4>
              <br />
              <h4 className="socials">+33 4 84 89 49 23</h4>
            </div>
            <div id="lastside">
              <h4 id="lastside">&copy;Legals</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
