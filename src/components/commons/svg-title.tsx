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

  const check = useMemo(() => {
    return true;
  }, [breakPoint1]);

  return (
    <motion.h3
      className={`flex mx-auto ${className ?? ""}`}
      style={{
        width: `clamp(${width * minScale}px, ${
          width * (check ? 1 : 0.75)
        }px, 100vw * ${width} / ${check ? 1024 : 375})`,
      }}
    >
      <motion.img src={prefix(src)} width={width} className="w-full" />
    </motion.h3>
  );
};
