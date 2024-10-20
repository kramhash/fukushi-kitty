"use client";

import { memo, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IArticleShort } from "@/types/newt";
import { prefix } from "@/utils";

// const interviews = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Interview = memo(function Interview({
  interviews,
}: {
  interviews: IArticleShort[];
}) {
  return (
    <motion.section className=" w-full bg-kitty_red pb-[200px]">
      <motion.div className="flex flex-col mt-[80px] mb-[20px]">
        <motion.div className="rounded-full px-[70px] bg-white mx-auto inline-block text-kitty_red font-black py-[5px]">
          インタビュー
        </motion.div>
      </motion.div>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-x-[0.7%] gap-y-[70px] max-w-[1280px] mx-auto w-[calc(100%-60px)]">
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
        className="max-w-[414px] relative"
        initial="init"
        animate={state}
      >
        <motion.div
          className=" origin-center relative rounded-[10%]  lg:rounded-[10%] overflow-hidden border-[3px] border-black"
          variants={{
            init: { rotate: rotation },
            hover: { rotate: 0, scale: 1.2, zIndex: 1 },
          }}
        >
          <motion.img src={prefix(`assets/top/interview/${data.id}.webp`)} />
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
              width={209}
              className=" "
            />
          </motion.div>
          <motion.div className="absolute bottom-0">
            <motion.img
              src={prefix(`assets/top/card-mask.png`)}
              className="bottom-[-1px] relative"
            />

            <motion.div className="absolute top-0 text-white font-mplus1c font-extrabold pl-[8%] pt-[12%] pr-[5%]">
              <motion.div className="text-8 md:text-20md mb-[4%] whitespace-pre-wrap leading-[145%]">
                {data.title}
              </motion.div>
              <motion.div className="text-7 md:text-16md leading-none mb-[2%]">
                {data.job}
              </motion.div>
              <motion.div className="text-7 md:text-16md leaidng-none">
                {data.name}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};
