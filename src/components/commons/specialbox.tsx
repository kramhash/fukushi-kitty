"use client";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { ReactNode, useMemo } from "react";
import { windowSizeAtom } from "../states";

export const SpecialBox = ({
  bgColor = "bg-white",
  fontColor,
  children,
}: {
  bgColor?: string;
  fontColor?: string;
  children?: ReactNode;
}) => {
  const { width = 1024 } = useAtomValue(windowSizeAtom);

  const { maskWidth, maskHeight, offsetX, radius, paddingTop } = useMemo(() => {
    let maskWidth = 368;
    let paddingTop = 43;
    // const maskWidth = Math.min(368, width * 0.3);
    let radius = 740;
    if (width < 480) {
      maskWidth = 100;
      paddingTop = 8;
      radius = 200;
    } else if (width < 768) {
      maskWidth = 184;
      paddingTop = 19;
      radius = 370;
    } else if (width < 1024) {
      maskWidth = 276;
      paddingTop = 27;
    } else {
    }

    return {
      maskWidth,
      maskHeight: maskWidth * (48 / 368),
      radius,
      offsetX: -(radius - maskWidth) / 2,
      paddingTop,
    };
  }, [width]);

  //pt-[43px]

  return (
    <motion.section
      className={` relative  w-[90%] mx-auto mt-[133px] max-w-[1024px]  ${fontColor}`}
      style={{ paddingTop }}
      suppressHydrationWarning
    >
      <motion.div
        className={`border-[5px] border-black rounded-[90px] w-full ${bgColor} relative`}
      >
        <motion.div className=" font-bold pt-[20px] px-[min(30px,2vw)] ">
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
