import "./HeroSection.css";
import Collage from "./Collage/Collage";


import CoshitaButton from "../../shared/CoshitaButton/CoshitaButton"

function HeroSection(){
    return(
        <section className="hero-section">
            <div className="section-container">
                <div className="hero-info-container">
                    <h1>Clases de Música</h1>
                    <h2 className="educacion-musical">Edudación Musical DC</h2>
                    <h3 className="profe">Profe Daiana Chaparro</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ut delectus blanditiis aspernatur dolorum aliquid nostrum quod placeat cumque mollitia? Maiores neque similique cum labore expedita aliquam blanditiis inventore facilis?</p>
                    <CoshitaButton label={"Contacto"}
                    
                    />
                </div>
                <Collage></Collage>
            </div>
        </section>
    );
}

export default HeroSection;