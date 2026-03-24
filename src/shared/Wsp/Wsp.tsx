import "./Wsp.css";
import { SiWhatsapp } from "react-icons/si";

export default function Wsp() {
  return (
    <div className="wsp">
      <a
        href="https://wa.link/i7khjf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiWhatsapp
          size={50}
          color="white"
          style={{ background: "#25D366", borderRadius: "100%" }}
        />
      </a>
    </div>
  );
}
