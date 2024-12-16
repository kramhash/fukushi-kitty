"use client";
import { motion } from "framer-motion";
import { Label, BlankIcon, MiniArrow } from "../commons";
import Link from "next/link";
import { prefix } from "@/utils";

export const Download = () => {
  return (
    <motion.section className="flex flex-col items-center mt-[50px] md:mt-[165px] mx-auto">
      {/* <SVGTitle
        src={"assets/top/title-download.png"}
        width={892}
        minScale={0.2}
      /> */}
      <picture>
        <source
          srcSet={prefix("assets/top/title-download-pc.png")}
          media="(min-width: 768px)"
          className=""
        />
        <img
          src={prefix("assets/top/title-download-sp.png")}
          alt="知ってる？福祉の最新事情"
          className="max-w-[264px] md:max-w-[958px] w-[90%] mx-auto"
        />
      </picture>

      <p className="w-[80%] max-w-[620px] font-mplus1c font-black mt-[22px] mb-[20px] md:mb-[38px]">{`福祉の仕事に、どんなイメージを持っていますか。あたらしい時代の福祉の仕事を知っていただくため、チラシを作成しました。学生、先生や保護者の方など、福祉の仕事の魅力を届けたい方にぜひお渡しください。`}</p>
      <Link href={"/assets/top/chirashi.pdf"} target="_blank" rel="noreferrer">
        <Label size="s" rightIcon={<MiniArrow fill="white" />}>
          <p className="px-[10px]  leading-none flex items-center text-20lg self-center mx-auto justify-center">
            チラシをダウンロード{<BlankIcon className="ml-[2px]" />}
          </p>
        </Label>
      </Link>
    </motion.section>
  );
};
