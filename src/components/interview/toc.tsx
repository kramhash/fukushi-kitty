"use client";

import { IArticleSection } from "@/types/newt";
import { motion } from "framer-motion";
import { SmallBox } from "../commons";

export const TOC = ({ data }: { data: IArticleSection[] }) => {
  return (
    <SmallBox className="w-full">
      <motion.ul className="flex flex-col gap-[10px]">
        {data.map((section, index) => (
          <motion.li
            key={`contents-${index}`}
            className="flex gap-[2%] text-18lg"
          >
            <motion.div className="font-mplus1c font-extrabold">
              {index + 1}
            </motion.div>
            <motion.a
              href={`#interview-section-${index + 1}`}
              className="font-mplus1c font-extrabold"
            >
              {section.title}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </SmallBox>
  );
};
