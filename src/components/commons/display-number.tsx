"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const DisplayNumber = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`rounded-full bg-kitty_red text-white font-mplus1c leading-none flex items-center justify-center aspect-square w-[58px] ${className}`}
    >
      {children}
    </motion.div>
  );
};
