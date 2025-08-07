import navItemsData from "./navItemsData";
import NavItem from "./NavItem/NavItem";
import { useState } from "react";

import "./NavList.css";

function NavList(){
    const [activeIndex, setActiveIndex] = useState(null);


    return(
        <ul className="nav-list">
            {
                navItemsData.map((item, index) => (
                    <NavItem key={index} label={item.label} href={item.href} onClick={() => setActiveIndex(index)} isClicked={index === activeIndex}/>
                ))
            }
        </ul>
    );
}

export default NavList;