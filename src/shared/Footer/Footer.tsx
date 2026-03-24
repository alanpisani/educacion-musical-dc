import "./Footer.css";

export default function Footer(){
    const actualYear = new Date().getFullYear();
    return(
        <footer>
            <p>{`© Educación musical DC   2023 - ${actualYear}`} </p>
        </footer>
    );
}