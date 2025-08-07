import "./CoshitaButton.css";

function CoshitaButton( { label, onClick } ){
    return (
        <button onClick={onClick} className="coshita-btn"> {label} </button>
    );
}

export default CoshitaButton;