import { useTransform, useSpring, MotionValue } from "framer-motion";

export function useSpringY(
  progress: MotionValue<number>,
  { from = -400, to = 0, stiffness = 60, damping = 7.5, mass = 0.8 } = {},
) {
  const raw = useTransform(progress, [0, 1], [from, to]);

  const y = useSpring(raw, {
    stiffness,
    damping,
    mass,
  });

  return y;
}
