"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SmallBox = ({
  className,
  children,
  width,
}: {
  className?: string;
  children?: ReactNode;
  width?: number | string;
}) => {
  return (
    <motion.div
      className={`rounded-[20px] px-[20px] py-[25px] relative bg-[rgba(0,0,0,0.08)] ${
        className ?? ""
      }`}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
