"use client";

import { prefix } from "@/utils";
import { motion } from "framer-motion";

export const People = ({
  pid,
  paddingRight = 70,
  width = 359,
  ribbonWidth = 265,
  paddingTop = 100,
}: {
  pid: number;
  paddingRight?: number;
  paddingTop?: number;
  width?: number;
  ribbonWidth?: number;
}) => {
  return (
    <motion.div
      className="relative  shrink-0"
      style={{ paddingRight, paddingTop }}
      suppressHydrationWarning
    >
      <motion.img
        src={prefix(`assets/top/interview-${pid}.webp`)}
        className="relative"
        width={359}
        height={359}
        suppressHydrationWarning
        style={{ width }}
      />
      <motion.img
        src={prefix("assets/commons/ribbon_master.svg")}
        className="absolute top-[0] right-[0]"
        width={ribbonWidth}
        suppressHydrationWarning
      />
    </motion.div>
  );
};
