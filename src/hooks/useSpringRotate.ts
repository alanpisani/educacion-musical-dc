import { useTransform, useSpring, MotionValue } from "framer-motion";

export function useSpringRotate(
  progress: MotionValue<number>,
  { from = -15, to = 0, stiffness = 60, damping = 15, mass = 0.8 } = {},
) {
  const raw = useTransform(progress, [0, 1], [from, to]);

  const rotate = useSpring(raw, {
    stiffness,
    damping,
    mass,
  });

  return rotate;
}
