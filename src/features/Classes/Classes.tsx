import "./Classes.css";
import { classesData } from "./data";
import ClassItem from "./components/ClassItem";
import { useRef, type RefObject } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useSpringY } from "../../hooks/useSpringY";

export default function Classes() {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(ref as RefObject<HTMLElement>);
  const y = useSpringY(progress, { from: -150, to: 300, stiffness: 10});

  return (
    <section ref={ref} className="classes-section" id="classes">
      <div className="classes">
        <div className="classes-title-wrapper">
          <motion.h2 style={{ y }}>Clases</motion.h2>
        </div>
        <div className="classes-items-container">
          {classesData.map((classItem) => (
            <ClassItem key={classItem.id} aClass={classItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
