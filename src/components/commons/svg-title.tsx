"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { prefix } from "@/utils";
import { useMediaQuery } from "usehooks-ts";

export const SVGTitle = ({
  src,
  width,
  className,
  minScale = 0.5,
}: {
  src: string;
  width: number;
  children?: ReactNode;
  className?: string;
  useBreakPoint?: boolean;
  minScale?: number;
}) => {
  const breakPoint1 = useMediaQuery("(min-width: 768px)");

  return (
    <motion.h3
      className={`flex mx-auto ${className ?? ""}`}
      style={{
        width: `clamp(${width * minScale}px, 100vw * ${width} / 1024, ${
          width * (breakPoint1 ? 1 : 0.75)
        }px)`,
      }}
      suppressHydrationWarning
    >
      <motion.img src={prefix(src)} width={width} className="w-full" />
    </motion.h3>
  );
};
