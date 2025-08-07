import "./Collage.css"
import fotoUno from "../../../../assets/img/foto-1.png";
import fotoDos from "../../../../assets/img/foto-2.png";
import fotoTres from "../../../../assets/img/foto-3.png";
import fotoCuatro from "../../../../assets/img/foto-4.jpg";
import fotoCinco from "../../../../assets/img/foto-5.png";

function Collage(){
    return (
        <div className="collage">
            <img src={fotoUno} alt="" />
            <img src={fotoDos} alt="" />
            <img src={fotoTres} alt="" />
            <img src={fotoCuatro} alt="" />
            <img src={fotoCinco} alt="" />
        </div>
    );
}

export default Collage;