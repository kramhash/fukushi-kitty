"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { IArticle } from "@/types/newt";

import { DisplayNumber, SmallBox } from "../commons";
import { Cover, TOC, Career } from "./";

export const Interview = memo(function Interview({ data }: { data: IArticle }) {
  return (
    <motion.section className="">
      <motion.div className="rounded-[72px] bg-white max-w-[878px] mx-auto">
        <Cover data={data} />
        <motion.div className="max-w-[692px] w-[90%] mx-auto pt-[10%]">
          <motion.h2 className="font-mplus1c text-30lg font-extrabold text-center whitespace-pre-wrap mb-[5%]">
            {data.title}
          </motion.h2>
          <TOC data={data.body} />
          <Career data={data} />
        </motion.div>
        {data.body.map((paragraph, index) => (
          <motion.section
            id={`interview-section-${index + 1}`}
            className="mt-[2%] mx-[5%] interview-section"
            key={`interview-section-${index}`}
          >
            <motion.h2 className="flex font-extrabold text-26lg mb-[5%] items-center gap-[2%]">
              <DisplayNumber className="text-26iv border-[2px] border-black px-[max(8px,2%)]">
                {index + 1}
              </DisplayNumber>
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
