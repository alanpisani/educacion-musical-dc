import { useState } from "react";
import "./Header.css";
import Burger from "./Burger/Burger";
import img from "../../assets/img/logo.png";
import { headerData } from "./data";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <header>
      <Burger onClick={() => setClicked(!clicked)} isOpen={clicked} />

      <nav className={`header-nav ${clicked ? "clicked" : ""}`}>
        <div className="nav-bar">
          <div className="navbar-no-content"></div>
          <div className="navbar-content">
            <div className="navbar-logo">
              <img src={img} alt="logo" />
            </div>
            <div className="navbar-title">
              <h2>Educación musical DC</h2>
            </div>
          </div>
        </div>
        <ul>
          {headerData.map((item) => (
            <li key={item.id}>
              <a href={item.href} onClick={() => setClicked(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-nav-bar"></div>
      </nav>
    </header>
  );
}
