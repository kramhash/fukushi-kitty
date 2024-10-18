"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Box = ({
  className = "bg-white",
  children,
  pt = 40,
  pb = 40,
}: {
  className?: string;
  children?: ReactNode;
  pt?: number;
  pb?: number;
}) => {
  return (
    <motion.div
      className={`relative rounded-[72px] px-[calc(min(4vw,30px))] max-w-[878px] border-[5px] border-black mx-auto w-full ${
        className ?? ""
      }`}
      style={{ paddingTop: pt, paddingBottom: pb }}
    >
      {children}
    </motion.div>
  );
};
