"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { DisplayNumber } from "@/components/commons";

export const InputTitle = ({
  n,
  children,
  hasNumber,
  justifyContent = "start",
}: {
  n: number;
  children?: ReactNode;
  hasNumber?: boolean;
  justifyContent?: string;
}) => {
  return (
    <motion.div
      className="flex items-center text-left leading-[150%] gap-[10px] w-full"
      style={{ justifyContent }}
      suppressHydrationWarning
    >
      {hasNumber && (
        <DisplayNumber className="shrink-0 text-30md px-[max(8px,2%)]">
          {n}
        </DisplayNumber>
      )}
      <motion.div className="text-24lg font-mplus1c font-black leading-[150%]">
        {children}
      </motion.div>
    </motion.div>
  );
};
