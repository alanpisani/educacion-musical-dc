import "./HeroSection.css";
import Collage from "./Collage/Collage";


import InfoContainer from "../../shared/InfoContainer/InfoContainer";

function HeroSection(){
    return(
        <section className="hero-section">
            <div className="section-container">
                <div className="hero-info-container">
                    <InfoContainer subtitle="Profe Daiana Chaparro"
                        titleChildren={
                            <h1>Educación Musical DC</h1>
                        }
                        description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis officiis deserunt quasi dolorum repudiandae quaerat enim dicta quam id pariatur ratione neque ea accusantium consectetur optio accusamus, quos incidunt perspiciatis?"}
                        labelBtn={"Contacto"}
                    />
                </div>
                <Collage></Collage>
            </div>
        </section>
    );
}

export default HeroSection;