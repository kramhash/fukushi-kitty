"use client";

import { motion } from "framer-motion";
import { SVGTitle } from "../commons";
import { prefix } from "@/utils";

const config = [
  { id: 1, href: "https://www.heralbony.jp/" },
  { id: 2, href: "https://www.intern-inc.jp/" },
  { id: 3, href: "https://www.famitra.jp/" },
  { id: 4, href: "https://itforce.co.jp/" },
  { id: 5, href: "https://www.instagram.com/caremate_recruit/" },
  { id: 6, href: "https://www.aba-lab.com" },
  { id: 7, href: "https://www.magicshields.co.jp/" },
  { id: 8, href: "https://caitech.co.jp/" },
  { id: 9, href: "https://lookmee.jp/" },
  { id: 10, href: "https://www.bibrid.co.jp/" },
  { id: 11, href: "https://eustylelab.co.jp/" },
  { id: 12, href: "https://solit-japan.com/" },
  { id: 13, href: "https://www.sketter.jp/" },
  { id: 14, href: "https://rehabforjapan.com/" },
];

export const Cooperation = () => {
  return (
    <motion.section className="flex flex-col items-center mx-auto mt-[187px] mb-[52px]">
      <SVGTitle src={"assets/top/title-cooperation.svg"} width={574} />
      <motion.p className="font-mplus1c font-black text-16 w-[80%] max-w-[620px] mx-auto mt-[30px] leading-[180%] mb-[45px] md:mb-[90px]">
        福祉現場や福祉人材を応援し、業界を盛り上げていくことに賛同いただいた企業・団体の皆様です。
      </motion.p>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] max-w-[90%] mx-auto">
        {config.map(({ id, href }) => {
          return <Cell index={id} key={`cell-${id}`} href={href} />;
        })}
      </motion.div>
    </motion.section>
  );
};

export const Cell = ({ index, href }: { index: number; href: string }) => {
  return (
    <motion.a
      className="flex max-w-[160px] md:max-w-[260px] justify-center items-center aspect-square bg-white rounded-[20px]"
      href={href}
      rel="noreferrer"
      target="_blank"
      initial="init"
      whileHover={"hover"}
    >
      <motion.div
        className="w-[85%]"
        variants={{ init: { width: "85%" }, hover: { width: "90%" } }}
      >
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
