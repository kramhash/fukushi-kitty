"use client";

import { SVGTitle } from "@/components/commons";
import { prefix } from "@/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const PresentSection = () => {
  return (
    <motion.section className="flex flex-col mt-[125px] max-w-[620px] mx-auto">
      <SVGTitle src="assets/top/messageform/present.svg" width={443} />
      <motion.p className="font-mplus1c text-left mb-[50px] mt-[20px]">
        {`上記、ハッシュタグ投稿をいただいた方の中から抽選で、ヘラルボニーの「トートバッグ」または「マスク」をプレゼント！`}
      </motion.p>

      <motion.div className="flex flex-col gap-[30px]">
        <Present img="present1" width={617} height={399}>
          ヘラルボニーサブバッグ（M）
        </Present>
        <Present img="present2" width={623} height={404}>
          ヘラルボニーマスク(M・L)
        </Present>
      </motion.div>
    </motion.section>
  );
};

const Present = ({
  img,
  children,
  width,
  height,
}: {
  img: string;
  children?: ReactNode;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.div className="flex flex-col items-center">
      <motion.h4 className="font-mplus1c text-[1.25rem] font-black mb-[15px]">
        {children}
      </motion.h4>
      <motion.img
        src={prefix(`assets/top/messageform/${img}.webp`)}
        loading="lazy"
        width={width}
        height={height}
      />
    </motion.div>
  );
};
