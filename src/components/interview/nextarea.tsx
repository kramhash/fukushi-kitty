"use client";

import { motion } from "framer-motion";
import { IArticle } from "@/types/newt";
import { prefix } from "@/utils";

export const NextArea = ({ data }: { data: IArticle }) => {
  return (
    <motion.div className="rounded-[24px] bg-white aspect-[1/0.795] relative overflow-hidden border-[2px] border-black">
      <motion.div className="p-[14px] relative">
        <motion.img
          src={data.mainImage.src}
          className="overflow-hidden rounded-t-[20px]"
        />
      </motion.div>
      <motion.div className="absolute bottom-[15%] w-[88%]">
        <motion.img
          src={prefix("assets/interview/mask-next.svg")}
          loading="lazy"
          width={764}
          height={244}
        />
      </motion.div>
      <motion.div className="absolute top-[59%] left-[3%] next-text-area font-mplus1c font-extrabold w-full">
        <motion.img
          src={prefix("assets/interview/copy2.svg")}
          loading="lazy"
          width={273}
          height={91}
          className="w-[30%]"
        />
        <motion.p className="text-16">{data.motivation}</motion.p>
      </motion.div>
    </motion.div>
  );
};
