"use client";
import { motion } from "framer-motion";
import { SpecialBox, SVGTitle } from "../commons";
import { prefix } from "@/utils";

export const About = () => {
  return (
    <motion.div className="relative overflow-hidden w-full">
      <SpecialBox>
        <SVGTitle
          src="assets/commons/title.svg"
          width={761}
          className="mt-[20px]"
          minScale={0.3}
        />
        <motion.div className="absolute w-[22%] top-[19%] sm:top-[30%] left-[5%] translate-x-[-40%] md:translate-x-0">
          <motion.img
            src={prefix("assets/commons/kitty.png")}
            loading="lazy"
            width={228}
            height={266}
          />
        </motion.div>

        <motion.div className="absolute w-[22%] bottom-[19%] sm:bottom-[10%] right-[0%] translate-x-[20%] md:translate-x-[-5%]">
          <motion.img
            src={prefix("assets/commons/kitty2.png")}
            loading="lazy"
            width={216}
            height={266}
          />
        </motion.div>

        <motion.div className=" whitespace-pre-wrap text-center font-bold leading-[200%] pt-[20px] pb-[50px] text-24lg text-black">
          {`福祉の仕事は、
「誰かの役に立つ大切な仕事」
「日本では将来性のある仕事」
もちろん、私たちのやりがいです。

でも、ほんとうの理由は、
「おしゃべりが好きだから」
「プライベートを大切にしたいから」
そんな小さなことが、
大きいのかもしれません。

さあ、あなたも。
ユニークな福祉職の人たちから、
ホンネの話を聞いてみませんか。

※すこし想豫とはちがうかも`}
        </motion.div>
      </SpecialBox>
    </motion.div>
  );
};
