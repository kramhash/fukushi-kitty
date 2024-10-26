"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
  animate,
} from "framer-motion";

import { People } from "./people";
import { useEffect, useMemo } from "react";

import { useAtomValue } from "jotai";
import { windowSizeAtom } from "../states";
import { prefix } from "@/utils";

const DefaultImageWidth = 359;
const DefaultGap = 70;
const DefaultRibbonWidth = 265;
const DefaultTop = 100;

export const InterviewLine = ({
  targets = [1, "", 2, "", 3, "", 2, ""],
  className,
  y = 0,
  direction = 1,
}: {
  targets?: (number | string)[];
  className?: string;
  y?: number;
  direction?: number;
}) => {
  const { scale } = useAtomValue(windowSizeAtom);

  const {
    imageWidth,
    ribbonWidth,
    paddingTop,
    paddingRight,
    dummyWidth,
    lineWidth,
    gap,
  } = useMemo(() => {
    const a1 = targets.filter((v) => typeof v === "number");
    const a2 = targets.filter((v) => typeof v === "string");

    const itemWidth = (DefaultImageWidth + DefaultGap) * scale;
    const dummyWidth = 302 * scale;
    const gap = 20 * scale;

    const lineWidth =
      a1.length * itemWidth +
      a2.length * dummyWidth +
      gap * (targets.length - 1);

    return {
      gap,
      itemWidth,
      imageWidth: DefaultImageWidth * scale,
      ribbonWidth: DefaultRibbonWidth * scale,
      paddingTop: DefaultTop * scale,
      paddingRight: DefaultGap * scale,
      dummyWidth,
      lineWidth,
      scale,
    };
  }, [scale, targets]);

  const baseX = useMotionValue(0);
  const offset = useMotionValue(20);
  const x = useTransform(baseX, (v) => `${wrap(0, -lineWidth, v)}px`);

  useAnimationFrame(() => {
    baseX.set(baseX.get() - (1 + offset.get()) * direction);
  });

  useEffect(() => {
    animate(offset, 0, { duration: 1.5 });
  }, [offset]);

  const targetArray = useMemo(() => {
    return [...targets, ...targets];
  }, [targets]);

  return (
    <motion.section
      className={`w-full overflow-hidden pb-[1px] ${className ?? ""}`}
      style={{ y: y * scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      suppressHydrationWarning
    >
      <motion.div
        className="flex flex-nowrap"
        style={{ x, gap }}
        suppressHydrationWarning
      >
        {targetArray.map((pid, index) => {
          // console.log(pid, typeof pid);
          if (typeof pid === "number") {
            return (
              <People
                key={`p-${index}`}
                pid={pid}
                width={imageWidth}
                ribbonWidth={ribbonWidth}
                paddingRight={paddingRight}
                paddingTop={paddingTop}
              />
            );
          } else {
            return (
              <Dummy key={`p-${index}`} width={dummyWidth} scale={scale} />
            );
          }
        })}
      </motion.div>
    </motion.section>
  );
};

const Dummy = ({ width, scale }: { width: number; scale: number }) => {
  useMemo(() => {}, []);

  return (
    <motion.div
      className="relative shrink-0 self-end"
      style={{ width, paddingRight: 100 * scale }}
      suppressHydrationWarning
    >
      <motion.div className="w-full">
        <motion.img src={prefix("assets/top/quest.svg")} />
      </motion.div>

      <motion.img
        src={prefix("assets/commons/ribbon_master.svg")}
        className="absolute top-0 right-0"
        width={265 * scale}
        style={{ y: -143 * scale }}
      />
    </motion.div>
  );
};
