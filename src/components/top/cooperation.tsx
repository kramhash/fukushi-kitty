"use client";

import { motion } from "framer-motion";
import { SVGTitle } from "../commons";
import { prefix } from "@/utils";

const config = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
];

export const Cooperation = () => {
  return (
    <motion.section className="flex flex-col items-center mx-auto mt-[187px] mb-[52px]">
      <SVGTitle src={"assets/top/title-cooperation.svg"} width={574} />
      <motion.p className="font-mplus1c font-black text-16 w-[80%] max-w-[620px] mx-auto mt-[30px] leading-[180%] mb-[45px] md:mb-[90px]">
        福祉現場や福祉人材を応援し、業界を盛り上げていくことに賛同いただいた企業・団体の皆様です。
      </motion.p>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] max-w-[90%] mx-auto">
        {config.map(({ id }) => {
          return <Cell index={id} key={`cell-${id}`} />;
        })}
      </motion.div>
    </motion.section>
  );
};

export const Cell = ({ index }: { index: number }) => {
  return (
    <motion.a className="flex max-w-[160px] md:max-w-[260px] justify-center items-center aspect-square bg-white rounded-[20px]">
      <motion.div className="w-[85%]">
        <motion.img
          className="w-auto h-auto"
          src={prefix(`assets/cooperation/${index}.png`)}
          loading="lazy"
          width={228}
          height={228}
        />
      </motion.div>
    </motion.a>
  );
};
