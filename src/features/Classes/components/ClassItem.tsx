import type { classDataType } from "../types";
import "./ClassItem.css";

interface Props {
  aClass: classDataType;
}

export default function ClassItem({ aClass }: Props) {
  return (
    <div className="class-item">
      <div className="class-item-title-wrapper">
        <h3>{aClass.title}</h3>
        <div className="class-item-img-wrapper">
          <img src={aClass.img} alt={aClass.id} />
        </div>
      </div>

      <ul>
        {aClass.items.map((theItem) => (
          <li key={theItem.id}>{theItem.item}</li>
        ))}
      </ul>
    </div>
  );
}
