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
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-x-[1%] gap-y-[70px] max-w-[1000px] mx-auto w-[calc(100%-60px)]">
        {interviews.map((data, i) => (
          <InterviewBox key={`interview-${data._id}`} index={i} pid={data.id} />
        ))}
      </motion.div>
    </motion.section>
  );
});

const InterviewBox = ({ pid, index }: { pid: string; index: number }) => {
  const { rotation } = useMemo(() => {
    return {
      rotation: index % 2 === 0 ? 5 : -5,
    };
  }, [index]);

  const [state, setState] = useState("enter");

  return (
    <Link
      href={`/interview/${pid}/`}
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
          className=" origin-center relative"
          variants={{
            init: { rotate: rotation },
            hover: { rotate: 0, scale: 1.2, zIndex: 1 },
          }}
        >
          <motion.img
            src={prefix(`assets/interview-section/interview-${pid}.png`)}
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </Link>
  );
};
