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
}: {
  bgColor?: string;
  fontColor?: string;
  className?: string;
  children?: ReactNode;
  hasBorder?: boolean;
  borderWidth?: number;
  px?: number;
  py?: number;
}) => {
  return (
    <motion.h3
      className={` inline-block mx-auto ${bgColor} ${fontColor} rounded-full  font-mplus1c font-black text-[20px] ${
        className ?? ""
      }`}
      style={{
        border: hasBorder ? `${borderWidth}px solid black` : "none",
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }}
    >
      {children}
    </motion.h3>
  );
};
