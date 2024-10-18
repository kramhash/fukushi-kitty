"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Label = ({
  children,
  className,
  bgColor = "bg-kitty_red",
  fontColor = "text-white",
  hasBorder = true,
  borderWidth = 5,
  px = 30,
  py = 10,
  lineHeight = 1,
  fontSize = "1.25rem",
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
}) => {
  return (
    <motion.h3
      className={` inline-block mx-auto ${bgColor} ${fontColor} rounded-full  font-mplus1c font-black ${
        className ?? ""
      }`}
      style={{
        border: hasBorder ? `${borderWidth}px solid black` : "none",
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
        lineHeight,
        fontSize,
      }}
    >
      {children}
    </motion.h3>
  );
};
