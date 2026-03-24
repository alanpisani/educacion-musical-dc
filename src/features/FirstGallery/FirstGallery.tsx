import "./FirstGallery.css";
import img from "../../../../assets/img/foto-1.png";
import SimpleParallax from "simple-parallax-js";

export default function FirstGallery() {
  return (
    <section className="first-gallery-section">
      <div className="first-gallery" style={{ minHeight: "100vh" }}>
        <div className="first-gallery-container">
          <div className="first-gallery-pic">
            <SimpleParallax>
              <img src={img} alt="" />
            </SimpleParallax>
          </div>
          <div className="first-gallery-pic">
            <SimpleParallax>
              <img src={img} alt="" />
            </SimpleParallax>
          </div>
          <div className="first-gallery-pic">
            <SimpleParallax>
              <img src={img} alt="" />
            </SimpleParallax>
          </div>
          <div className="first-gallery-pic">
            <SimpleParallax>
              <img src={img} alt="" />
            </SimpleParallax>
          </div>
          <div className="first-gallery-pic">
            <SimpleParallax>
              <img src={img} alt="" />
            </SimpleParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
