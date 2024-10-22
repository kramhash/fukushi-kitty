"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Box = ({
  className = "bg-white",
  children,
  pt = 40,
  pb = 40,
  px = "calc(min(4vw,30px))",
  // borderWidth = 5,
  maxWidth = 878,
  bgColor = "bg-white",
}: {
  className?: string;
  children?: ReactNode;
  pt?: number;
  pb?: number | string;
  px?: string | number;
  borderWidth?: number;
  maxWidth?: number;
  bgColor?: string;
}) => {
  return (
    <motion.div
      className={`relative rounded-[36px] md:rounded-[72px] border-black mx-auto w-full box ${
        className ?? ""
      } ${bgColor ?? ""}`}
      style={{
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: px,
        paddingRight: px,
        // borderWidth,
        maxWidth,
      }}
    >
      {children}
    </motion.div>
  );
};
