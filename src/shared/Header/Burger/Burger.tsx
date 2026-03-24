import "./Burger.css";

interface BurgerProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function Burger({ onClick, isOpen }: BurgerProps) {
  return (
    <button className="burger">
      <div className={`burger-inner ${isOpen ? "open" : ""}`} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
