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
import { useWindowSize } from "usehooks-ts";

const DefaultImageWidth = 359;
const DefaultGap = 70;
const DefaultRibbonWidth = 265;
const DefaultTop = 100;

export const InterviewLine = ({
  targets = [1, 2, 3, 2],
  className,
  y = 0,
  direction = 1,
}: {
  targets?: number[];
  className?: string;
  y?: number;
  direction?: number;
}) => {
  const { width = 375 } = useWindowSize();

  const {
    scale,
    itemWidth,
    imageWidth,
    ribbonWidth,
    paddingTop,
    paddingRight,
  } = useMemo(() => {
    const scale = Math.min(1, width / 1024);

    return {
      itemWidth: (DefaultImageWidth + DefaultGap) * scale,
      imageWidth: DefaultImageWidth * scale,
      ribbonWidth: DefaultRibbonWidth * scale,
      paddingTop: DefaultTop * scale,
      paddingRight: DefaultGap * scale,
      scale,
    };
  }, [width]);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(0, -itemWidth * 4, v)}px`);

  useAnimationFrame(() => {
    baseX.set(baseX.get() - 1 * direction);
  });

  const targetArray = useMemo(() => {
    return [...targets, ...targets];
  }, [targets]);

  return (
    <motion.section
      className={`w-full overflow-hidden ${className ?? ""}`}
      style={{ y: y * scale }}
      suppressHydrationWarning
    >
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {targetArray.map((pid, index) => (
          <People
            key={`p-${index}`}
            pid={pid}
            width={imageWidth}
            ribbonWidth={ribbonWidth}
            paddingRight={paddingRight}
            paddingTop={paddingTop}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
