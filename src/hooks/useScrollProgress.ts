import { useScroll } from "framer-motion";
import type { RefObject } from "react";

export function useScrollProgress(
  ref: RefObject<HTMLElement>,
  offset: ["start 100%", "end 100%"] = ["start 100%", "end 100%"] 
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return scrollYProgress;
}