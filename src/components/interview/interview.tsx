"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { IArticle } from "@/types/newt";
import { TOC } from "./toc";

export const Interview = memo(function Interview({ data }: { data: IArticle }) {
  return (
    <motion.section className="">
      <motion.div className="rounded-[72px] bg-white max-w-[878px] mx-auto">
        <motion.div className="max-w-[692px] w-full mx-auto pt-[10%]">
          <motion.h1>{data.title}</motion.h1>
          <TOC data={data.body} />
        </motion.div>
        {data.body.map((paragraph, index) => (
          <motion.section
            className="mt-[120px] mx-[40px] interview-section"
            key={`interview-section-${index}`}
          >
            <motion.h2 className="flex font-extrabold text-26lg mb-[2%]">
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
