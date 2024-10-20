"use client";

import { IArticleSection } from "@/types/newt";
import { motion } from "framer-motion";
import { SmallBox } from "../commons";

export const TOC = ({ data }: { data: IArticleSection[] }) => {
  return (
    <SmallBox>
      <motion.ul className="flex flex-col gap-[10px]">
        {data.map((section, index) => (
          <motion.li key={`contents-${index}`} className="flex gap-[2%]">
            <motion.div className="font-mplus1c font-extrabold">
              {index + 1}.
            </motion.div>
            <motion.div className="font-mplus1c font-extrabold">
              {section.title}
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </SmallBox>
  );
};
