import { useRef, type RefObject } from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";

import img from "../../assets/img/foto-1.png";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useSpringY } from "../../hooks/useSpringY";
import { useSpringX } from "../../hooks/useSpringX";
import { useSpringRotate } from "../../hooks/useSpringRotate";


export default function AboutMe() {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(ref as RefObject<HTMLElement>);

  const y = useSpringY(progress, { from: -300 });
  const x = useSpringX(progress, { from: 400});
  const rotate = useSpringRotate(progress, { from: 25, to: 0 });

  return (
    <section ref={ref} className="about-me-section" id="about-me">
      <div className="about-me">
        <div className="h2-wrapper">
          <motion.h2 style={{ y }}>Me presento</motion.h2>
        </div>
        <div className="about-me-presentation">
          <p className="about-me-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem officiis odit consequatur! Placeat qui recusandae ex
            cumque explicabo. Recusandae blanditiis corrupti quaerat qui porro
            eveniet repellendus, perspiciatis dolore minima neque.
          </p>
          <motion.div className="about-me-pic" style={{ rotate, x }}>
            <img src={img} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
