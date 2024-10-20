"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const DisplayNumber = ({
  children,
  className,
  borderClass,
}: {
  children?: ReactNode;
  className?: string;
  borderClass?: string;
}) => {
  return (
    <motion.div
      className={`rounded-full  bg-kitty_red text-white font-mplus1c font-extrabold leading-none flex items-center justify-center aspect-square ${
        className ?? ""
      } ${borderClass ?? ""}`}
    >
      {children}
    </motion.div>
  );
};
