"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { IArticle } from "@/types/newt";

import { AnchorLabel, BackArrow, DisplayNumber } from "../commons";
import { Cover, TOC, Career } from "./";
import { NextArea } from "./nextarea";
import { prefix } from "@/utils";

export const Interview = memo(function Interview({
  data,
  nextItem,
}: {
  data: IArticle;
  nextItem: IArticle;
}) {
  return (
    <motion.section className="pt-[100px] w-full px-[2%] overflow-hidden">
      <div className="w-full inline-block">
        <BackButton />
      </div>

      <motion.div className="rounded-[23px] mt-[3%] md:rounded-[72px] bg-white max-w-[878px] mx-auto pb-[4%] border-black border-[3px] md:border-[5px] relative">
        <Cover data={data} />
        <motion.img
          src={prefix(`assets/interview-section/name/${data.id}.png`)}
          className="absolute top-0 left-0 max-w-[183px] w-[20%]"
          style={{ x: "-12%", y: "-30%" }}
          loading="lazy"
        />
        <motion.div className="max-w-[692px] w-[90%] mx-auto pt-[5%]">
          <motion.h2 className="font-mplus1c text-16xs font-extrabold text-center whitespace-pre-wrap mb-[5%]">
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

      <motion.div className="my-[10%]">
        <BackButton />
      </motion.div>

      <NextArea data={nextItem} />
    </motion.section>
  );
});

const BackButton = ({
  fontSize = "var(--font-16-static)",
  size,
}: {
  fontSize?: string;
  size?: "s" | "m" | "l";
}) => {
  return (
    <AnchorLabel
      leftIcon={<BackArrow />}
      rightIcon={null}
      fontColor="text-black"
      bgColor="#ffffff"
      className="mx-auto"
      href="/"
      fontSize={fontSize}
      size={size}
    >
      Back to Top
    </AnchorLabel>
  );
};
