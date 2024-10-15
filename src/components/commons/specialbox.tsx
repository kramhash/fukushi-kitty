"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SpecialBox = ({
  bgColor = "bg-white",
  fontColor,
  children,
}: {
  bgColor?: string;
  fontColor?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.section
      className={`pt-[43px] relative  w-[90%] mx-auto mt-[133px] ${fontColor}`}
    >
      <motion.div
        className={`border-[5px] border-black rounded-[90px] w-full ${bgColor} relative`}
      >
        <motion.div className=" whitespace-pre-wrap text-center font-bold text-[24px] leading-[200%] pt-[20px]">
          {children}
        </motion.div>
      </motion.div>
      <motion.div
        className="w-[368px] h-[48px] overflow-hidden absolute top-[0] left-1/2"
        style={{ x: "-50%", y: 0 }}
      >
        <motion.div
          className={`w-[740px] h-[720px] ${bgColor} rounded-full absolute border-[5px] border-black`}
          style={{ x: -186 }}
        ></motion.div>
      </motion.div>
    </motion.section>
  );
};
