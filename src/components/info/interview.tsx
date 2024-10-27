"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Box, Label } from "../commons";
import { prefix } from "@/utils";

export const InfoInterviewBox = ({}: { intId: number }) => {
  return (
    <Box
      px={0}
      maxWidth={1024}
      pb="5%"
      className="flex flex-col justify-center"
    >
      <motion.div className="flex-col sm:flex-row flex justify-center items-center sm:items-stretch gap-[20px] sm:gap-[4%] px-[5%] mb-[12%] sm:mb-0">
        <motion.div className="max-w-[108px] sm:max-w-[210px]">
          <motion.img src={`assets/top/info/int-1-prof.png`} width={210} />
        </motion.div>
        <motion.div className="flex flex-col gap-[20px] sm:gap-[10%]  items-start">
          <Label borderWidth={3} className="mx-auto sm:mx-0 px-[20px]" size="s">
            中澤真希さんの場合｜介護職
          </Label>
          <motion.img src={`assets/top/info/int-1-title.png`} />
        </motion.div>
      </motion.div>

      <motion.div className="mx-auto px-[10%] md:px-[5%] mb-[15%] md:mb-[2%] mt-[4%]">
        <motion.picture>
          <source
            media="(min-width: 640px)"
            srcSet={prefix(`assets/top/info/int-1-img.png`)}
            width={912}
            height={303}
          />
          <source
            srcSet={prefix(`assets/top/info/int-1-img-sp.png`)}
            width={536}
          />
          <motion.img
            src={prefix(`assets/top/info/int-1-img.png`)}
            width={912}
            height={303}
            className="max-w-full"
          />
        </motion.picture>
      </motion.div>

      <hr />

      <motion.div className="flex justify-end mt-[5%] pr-[5%] text-black">
        <Link
          href="/interview/1/"
          className="text-20md lg:text-26lg font-mplus1c font-black flex items-center gap-[2vw]"
        >
          <div className="whitespace-pre-wrap sm:whitespace-normal text-right">{`中澤さんの
インタビュー記事はこちら`}</div>
          <div className="grow-0">
            <Arrow />
          </div>
        </Link>
      </motion.div>
    </Box>
  );
};

const Arrow = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="17"
        transform="rotate(-90 18 18)"
        fill="#E6002D"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M23.2347 16.297C24.503 17.0781 24.503 18.9219 23.2347 19.703L17.7988 23.0507C16.4662 23.8713 14.75 22.9126 14.75 21.3477L14.75 14.6523C14.75 13.0874 16.4662 12.1287 17.7988 12.9493L23.2347 16.297Z"
        fill="white"
      />
    </svg>
  );
};
