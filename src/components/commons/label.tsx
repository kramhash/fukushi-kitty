"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Label = ({
  children,
  className,
  bgColor = "bg-kitty_red",
  fontColor = "text-white",
  lineHeight = 1,
  // fontSize = "var(--font-25lg)",
  size,
}: {
  bgColor?: string;
  fontColor?: string;
  className?: string;
  children?: ReactNode;
  hasBorder?: boolean;
  borderWidth?: number;
  px?: number;
  py?: number;
  lineHeight?: number | string;
  fontSize?: number | string;
  size?: "s" | "m" | "l";
}) => {
  return (
    <motion.h3
      className={` inline-block  ${bgColor} ${fontColor} rounded-full w-fit text-center font-mplus1c font-black label ${
        className ?? ""
      } ${size ?? ""}`}
      style={{
        lineHeight,
        // fontSize,
      }}
    >
      {children}
    </motion.h3>
  );
};
