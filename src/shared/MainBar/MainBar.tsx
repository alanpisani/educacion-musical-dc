import "./MainBar.css";
import { useScrolled } from "../../hooks/useScrolled";
import img from "../../assets/img/logo.png";

export default function MainBar() {
  const scrolled = useScrolled();
  return (
    <div className={`mainbar ${scrolled ? "scrolled" : ""}`}>
      <div className="mainbar-logo-container">
        <div className="mainbar-pic">
          <img src={img} alt="logo" />
        </div>
      </div>

      <div className="mainbar-name">
        <h2>Educación musical DC</h2>
      </div>
      <div className={`mainbar-description ${scrolled ? "scrolled" : ""}`}>
        <p>Clases de música personalizadas para niños y adultos.</p>
      </div>
    </div>
  );
}
