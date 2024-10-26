"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { prefix } from "@/utils";
import { useMediaQuery } from "usehooks-ts";

export const SVGTitle = ({
  src,
  width,
  height,
  className,
  minScale = 0.5,
  alt,
}: {
  src: string;
  width: number;
  height?: number;
  children?: ReactNode;
  className?: string;
  useBreakPoint?: boolean;
  minScale?: number;
  alt?: string;
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
      <motion.img
        src={prefix(src)}
        width={width}
        height={height}
        className="w-full"
        loading="lazy"
        alt={alt}
      />
    </motion.h3>
  );
};
