"use client";

import { motion } from "framer-motion";

import type { IArticle } from "@/types/newt";
import { SmallBox } from "../commons";
import { prefix } from "@/utils";

export const Career = ({ data }: { data: IArticle }) => {
  return (
    <SmallBox className=" font-extrabold whitespace-pre-wrap mb-[15%] mt-[5%] font-mplus1c flex flex-col items-center">
      <motion.h4 className="font-mplus1c text-24lg">キャリア</motion.h4>
      <motion.img
        src={prefix(`assets/interview/line.svg`)}
        className="my-[3%]"
      />
      <motion.div className="flex-col md:flex-row items-center md:items-start flex gap-[3%] w-full mt-[3%] md:mt-0">
        <motion.div className="flex flex-col items-center gap-[5%] w-full md:w-[15.6%] shrink-0">
          <motion.img
            src={prefix(`assets/interview/icon/icon-${data.id}.png`)}
            className="max-w-[108px] w-[25%]  md:w-full"
          />
          <motion.p className="shrink-0">{data.name}</motion.p>
        </motion.div>
        <motion.p className="text-14xs md:text-18lg text-center md:text-left mt-[10px] md:mt-0">
          {data.career}
        </motion.p>
      </motion.div>
    </SmallBox>
  );
};
