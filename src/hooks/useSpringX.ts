import { useTransform, useSpring, MotionValue } from "framer-motion";

export function useSpringX(
  progress: MotionValue<number>,
  { from = -400, to = 0, stiffness = 60, damping = 15, mass = 0.8 } = {},
) {
  const raw = useTransform(progress, [0, 1], [from, to]);

  const x = useSpring(raw, {
    stiffness,
    damping,
    mass,
  });

  return x;
}
