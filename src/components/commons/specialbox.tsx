"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

export const SpecialBox = ({
  bgColor = "bg-white",
  fontColor,
  children,
}: {
  bgColor?: string;
  fontColor?: string;
  children?: ReactNode;
}) => {
  const { width = 1024 } = useWindowSize();

  const { maskWidth, maskHeight, offsetX, radius } = useMemo(() => {
    const maskWidth = Math.min(368, width * 0.3);
    const radius = Math.min(740, width * 1.1);

    return {
      maskWidth,
      maskHeight: maskWidth * (48 / 368),
      radius,
      offsetX: -(radius - maskWidth) / 2,
    };
  }, [width]);

  //pt-[43px]

  return (
    <motion.section
      className={` relative  w-[90%] mx-auto mt-[133px] ${fontColor}`}
      style={{ paddingTop: maskHeight }}
      suppressHydrationWarning
    >
      <motion.div
        className={`border-[5px] border-black rounded-[90px] w-full ${bgColor} relative`}
      >
        <motion.div className=" whitespace-pre-wrap text-center font-bold text-[24px] leading-[200%] pt-[20px]">
          {children}
        </motion.div>
      </motion.div>
      <motion.div
        className=" overflow-hidden absolute top-[0] left-1/2"
        style={{ x: "-50%", y: 0, width: maskWidth, height: maskHeight }}
        suppressHydrationWarning
      >
        <motion.div
          className={` ${bgColor} rounded-full absolute border-[5px] border-black`}
          style={{ x: offsetX, width: radius, height: radius }}
          suppressHydrationWarning
        ></motion.div>
      </motion.div>
    </motion.section>
  );
};
//w-[740px] h-[720px]
