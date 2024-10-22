"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Box, Label } from "../commons";

export const InfoInterviewBox = ({}: { intId: number }) => {
  return (
    <Box
      px={0}
      maxWidth={1024}
      pb="5%"
      className="flex flex-col justify-center"
    >
      <motion.div className="flex justify-center gap-[4%] px-[5%]">
        <motion.div>
          <motion.img src={`assets/top/info/int-1-prof.png`} />
        </motion.div>
        <motion.div className="flex flex-col gap-[10%] items-start">
          <Label borderWidth={3} fontSize={"var(--font-16g)"}>
            中澤真希さんの場合｜介護職
          </Label>
          <motion.img src={`assets/top/info/int-1-title.png`} />
        </motion.div>
      </motion.div>

      <motion.div className="mx-auto md:px-[5%] mb-[2%] mt-[4%]">
        <motion.img
          src={`assets/top/info/int-1-img.png`}
          width={904}
          className="max-w-full"
        />
      </motion.div>

      <hr />

      <motion.div className="flex justify-end mt-[5%] pr-[5%]">
        <Link
          href="/interview/1/"
          className="text-20md lg:text-26lg font-mplus1c font-black"
        >
          中澤さんのインタビュー記事はこちら
        </Link>
      </motion.div>
    </Box>
  );
};
