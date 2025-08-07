import "./HeroSection.css";

import InfoContainer from "../../shared/InfoContainer/InfoContainer";

function HeroSection(){
    return(
        <section className="hero-section">
            <div className="hero-info-container">
                <InfoContainer subtitle="Profe Daiana Chaparro"
                    titleChildren={
                        <h1>Educación Musical DC</h1>
                    }
                    description={"lorem ipsu kljask jkjkljka kjaksjd kjk laksjd  jklasd jklasssl  lkjklas   lkjaklsd k jklasd lk jaks  lkjaskldk k jkals"}
                    labelBtn={"Contacto"}
                />
            </div>
            <div className="collage">
                
            </div>

            
        </section>
    );
}

export default HeroSection;