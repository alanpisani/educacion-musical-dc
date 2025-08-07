import "./NavItem.css";

function NavItem( { label, href, isClicked, onClick } ){

    return(
        <div className={isClicked ? "nav-item-border clicked" : "nav-item-border"}>
            <li onClick={onClick}  className="nav-item" ><a href={href}>{label}</a></li>
        </div>
        
    );
}

export default NavItem;