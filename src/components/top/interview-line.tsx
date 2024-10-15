"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";

import { People } from "./people";
import { useMemo } from "react";

export const InterviewLine = ({
  targets = [1, 2, 3, 2],
  className,
  y = 0,
}: {
  targets?: number[];
  className?: string;
  y?: number;
}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(0, -429 * 4, v)}px`);

  useAnimationFrame(() => {
    baseX.set(baseX.get() - 1);
  });

  const targetArray = useMemo(() => {
    return [...targets, ...targets];
  }, [targets]);

  return (
    <motion.section
      className={`w-full overflow-hidden ${className ?? ""}`}
      style={{ y }}
    >
      <motion.div className="   flex flex-nowrap" style={{ x }}>
        {targetArray.map((pid, index) => (
          <People key={`p-${index}`} pid={pid} />
        ))}
      </motion.div>
    </motion.section>
  );
};
