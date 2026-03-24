import "./Hero.css";
import Gallery from "./Gallery/Gallery";

export default function Hero() {
  

  return (
    <section className="hero-section" id="inicio">
      <div className="hero">
        <Gallery />
        <div className="hero-content">
          <h1>Aprendé música a tu ritmo</h1>
        </div>
      </div>
    </section>
  );
}
