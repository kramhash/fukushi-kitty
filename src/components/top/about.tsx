"use client";
import { motion } from "framer-motion";
import { SpecialBox, SVGTitle } from "../commons";

export const About = () => {
  return (
    <SpecialBox>
      <SVGTitle
        src="assets/commons/title.svg"
        width={761}
        className="mt-[20px]"
      />
      <motion.div className=" whitespace-pre-wrap text-center font-bold text-[1.5rem] leading-[200%] pt-[20px] pb-[50px]">
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
  );
};
