import "./Hero.css";
import Gallery from "./Gallery/Gallery";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HeroTitleMobile from "./HeroTitleMobile/HeroTitleMobile";

export default function Hero() {
  const media = useMediaQuery("(max-width: 900px)");
  const slogan = "Aprendé música a tu ritmo";

  return (
    <section className="hero-section" id="inicio">
      <div className="hero">
        <Gallery />
        <div className="hero-content">
          {!media ? <h1>{slogan}</h1> : <HeroTitleMobile slogan={slogan} />}
        </div>
      </div>
    </section>
  );
}
