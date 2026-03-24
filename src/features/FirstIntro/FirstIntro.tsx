import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./FirstIntro.css";

export default function FirstIntro() {
  const media = useMediaQuery("(max-width: 900px)");

  if (!media) {
    return (
      <section className="first-intro-section">
        <div className="first-intro">
          <h2>
            Tocá lo que sentís, <br />
            no solo lo que está escrito.
          </h2>
        </div>
      </section>
    );
  }
}
