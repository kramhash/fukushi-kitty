"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { IArticle } from "@/types/newt";

export const Interview = memo(function Interview({ data }: { data: IArticle }) {
  return (
    <motion.section className="">
      <motion.div className="rounded-[72px] bg-white max-w-[878px] mx-auto">
        <motion.h1>{data.title}</motion.h1>
        <motion.div>
          <motion.ul>
            {data.body.map((paragraph, index) => (
              <motion.li key={`p-${index}`}>{paragraph.title}</motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {data.body.map((paragraph, index) => (
          <motion.section
            className="mt-[120px] mx-[40px]"
            key={`interview-section-${index}`}
          >
            <motion.h2 className="flex font-extrabold">
              <motion.div></motion.div>
              <motion.div>{paragraph.title}</motion.div>
            </motion.h2>
            <motion.div
              dangerouslySetInnerHTML={{ __html: paragraph.content }}
            ></motion.div>
          </motion.section>
        ))}
      </motion.div>
    </motion.section>
  );
});
