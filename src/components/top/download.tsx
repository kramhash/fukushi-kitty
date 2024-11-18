"use client";
import { motion } from "framer-motion";
import { Label, BlankIcon, SVGTitle, MiniArrow } from "../commons";
import Link from "next/link";
import { prefix } from "@/utils";

export const Download = () => {
  return (
    <motion.section className="flex flex-col items-center mt-[50px] md:mt-[165px] mx-auto">
      <SVGTitle
        src={"assets/top/title-download.png"}
        width={892}
        minScale={0.2}
      />
      <p className="w-[80%] max-w-[620px] font-mplus1c font-black mt-[22px] mb-[20px] md:mb-[38px]">{`福祉職の思いを1人でも多くの人に届けるため、本キャンペーンのチラシを作成いたしました。学生、先生や保護者など福祉の仕事の魅力を届けたい方へお渡しいただけたら嬉しいです。`}</p>
      <Link
        href={prefix("assets/top/chirashi.pdf")}
        target="_blank"
        rel="noreferrer"
      >
        <Label size="s" rightIcon={<MiniArrow fill="white" />}>
          <p className="px-[10px]  leading-none flex items-center text-20lg self-center mx-auto justify-center">
            チラシをダウンロード{<BlankIcon className="ml-[2px]" />}
          </p>
        </Label>
      </Link>
    </motion.section>
  );
};
