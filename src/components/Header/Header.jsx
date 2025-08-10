import NavList from "./NavList/NavList";
import Logo from "./Logo/Logo";
import CoshitaButton from "../shared/CoshitaButton/CoshitaButton";

import "./Header.css";

function Header(){
    return (
        <header>
            <nav className="navigator">
                <Logo />
                <NavList />
                <CoshitaButton label={"Contacto"}/>
            </nav>
        </header>
    );
}

export default Header;