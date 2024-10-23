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
      <motion.div className="flex gap-[3%]">
        <motion.div className="flex flex-col items-center gap-[5%]">
          <motion.img src={prefix(`assets/interview/prof/1.png`)} />
          <motion.p className="shrink-0">{data.name}</motion.p>
        </motion.div>
        <motion.p className="text-18lg">{data.career}</motion.p>
      </motion.div>
    </SmallBox>
  );
};
