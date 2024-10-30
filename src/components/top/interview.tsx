"use client";

import { memo, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IArticleShort } from "@/types/newt";
import { prefix } from "@/utils";
import { Label, SVGTitle } from "../commons";

// const interviews = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Interview = memo(function Interview({
  interviews,
}: {
  interviews: IArticleShort[];
}) {
  return (
    <motion.section
      className=" w-full bg-kitty_red pb-[200px] overflow-hidden has-anchor"
      id="interview"
    >
      <motion.div className="flex flex-col mt-[80px] mb-[10%]  items-center gap-[2vw]">
        <Label
          borderWidth={0}
          bgColor="bg-white"
          fontColor="text-kitty_red"
          className="noborder"
          size="m"
        >
          INTERVIEW
        </Label>
        <SVGTitle src="assets/top/title-interview.svg" width={477}></SVGTitle>
      </motion.div>

      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-x-[0.7%] gap-y-[70px] max-w-[1280px] mx-auto w-[90%]">
        {interviews.map((data, i) => (
          <InterviewCard key={`interview-${data._id}`} index={i} data={data} />
        ))}
      </motion.div>
    </motion.section>
  );
});

const InterviewCard = ({
  data,
  index,
}: {
  data: IArticleShort;
  index: number;
}) => {
  const { rotation } = useMemo(() => {
    return {
      rotation: index % 2 === 0 ? -5 : 5,
    };
  }, [index]);

  const [state, setState] = useState("enter");

  return (
    <Link
      href={`/interview/${data.id}/`}
      className=" cursor-pointer block"
      onMouseOver={() => {
        setState("hover");
      }}
      onMouseOut={() => {
        setState("enter");
      }}
    >
      <motion.div
        className="max-w-[414px] relative "
        initial="init"
        animate={state}
        variants={{
          init: { rotate: rotation },
          hover: { rotate: 0, scale: 1.2, zIndex: 1 },
        }}
      >
        <motion.div className=" origin-center relative rounded-[1.5rem]  lg:rounded-[3rem] overflow-hidden border-[3px] border-black">
          <motion.img
            src={prefix(`assets/interview-section/card-${data.id}.webp`)}
            loading="lazy"
            width={414}
            height={536}
          />
          {/* <motion.img
            src={prefix(`assets/interview-section/interview-${pid}.png`)}
            className="w-full"
          /> */}

          <motion.div
            className="absolute bottom-[45%] left-[49.5%]"
            style={{ x: "-50%" }}
          >
            <motion.img
              src={prefix(`assets/commons/beforeafter.png`)}
              loading="lazy"
              width={209}
              height={46}
              className=" "
            />
          </motion.div>
          <motion.div className="absolute bottom-0">
            <motion.img
              src={prefix(`assets/top/card-mask.png`)}
              className="bottom-[-1px] relative"
            />

            <motion.div className="absolute top-0 text-white font-mplus1c font-extrabold pl-[8%] pt-[12%] pr-[5%] pb-[5%] flex flex-col h-full">
              <motion.div className="text-10xs  md:text-20lg mb-[4%] whitespace-pre-wrap leading-[145%] grow shrink-0">
                {data.motivation}
              </motion.div>
              <motion.div className="text-7 md:text-16xl leading-none mb-[2%] grow-0">
                {data.job}
              </motion.div>
              <motion.div className="text-7 md:text-16xl leaidng-none grow-0">
                {data.name}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.img
          src={prefix(`assets/interview-section/name/${data.id}.png`)}
          loading="lazy"
          className="absolute top-0 left-0 max-w-[183px] w-[44%]"
          style={{ x: "-15%", y: "-30%" }}
          width={183}
        />
      </motion.div>
    </Link>
  );
};
