"use client";

import { prefix } from "@/utils";
import { motion } from "framer-motion";

export const People = ({ pid }: { pid: number }) => {
  return (
    <motion.div className="relative pt-[100px] pr-[70px] shrink-0">
      <motion.img
        src={prefix(`assets/top/interview-${pid}.png`)}
        className="relative"
        width={359}
      />
      <motion.img
        src={prefix("assets/commons/ribbon_master.svg")}
        className="absolute top-[0] right-[0]"
        width={265}
      />
    </motion.div>
  );
};
