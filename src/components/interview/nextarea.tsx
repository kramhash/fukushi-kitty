"use client";

import { motion } from "framer-motion";
import { IArticle } from "@/types/newt";
import { prefix } from "@/utils";
import Link from "next/link";
import { Label, NextArrow } from "../commons";

export const NextArea = ({ data }: { data: IArticle }) => {
  return (
    <Link href={`/interview/${data.id}/`} className="relative">
      <motion.div className="rounded-[24px] bg-white aspect-[1/0.795] relative overflow-hidden border-[2px] border-black max-w-[878px] mx-auto">
        <motion.div className="p-[14px] relative">
          <motion.img
            src={data.mainImage.src}
            className="overflow-hidden rounded-t-[20px]"
          />
        </motion.div>
        <motion.div className="absolute bottom-[22%] w-[88%]">
          <motion.img
            src={prefix("assets/interview/mask-next.svg")}
            loading="lazy"
            width={764}
            height={244}
          />
        </motion.div>
        <motion.div className="absolute top-[53%] left-[3%] next-text-area font-mplus1c font-extrabold w-full">
          <motion.img
            src={prefix("assets/interview/copy2.svg")}
            loading="lazy"
            width={273}
            height={91}
            className="w-[30%] max-w-[273px]"
          />
          <motion.p className="text-16xs pr-[20%] mt-[1%] leading-[130%] mb-[2%]">
            {data.motivation}
          </motion.p>
          <motion.p className="leading-[130%] text-8xs whitespace-pre-wrap">{`${data.belong}\n${data.job}`}</motion.p>
          <motion.p className="leading-none text-10xs mt-[2%]">
            {data.name}
          </motion.p>
        </motion.div>
      </motion.div>
      <Label
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        fontColor="text-black"
        bgColor="bg-white"
        rightIcon={<NextArrow />}
      >
        Next
      </Label>
    </Link>
  );
};
