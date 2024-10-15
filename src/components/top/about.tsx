"use client";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section className="pt-[43px] relative  w-[90%] mx-auto mt-[133px]">
      <motion.div className="border-[5px] border-black rounded-[90px] bg-white relative">
        <motion.div className=" whitespace-pre-wrap text-center font-bold text-[24px] leading-[200%] pt-[20px]">
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
      </motion.div>
      <motion.div
        className="w-[368px] h-[48px] overflow-hidden absolute top-[0] left-1/2"
        style={{ x: "-50%", y: 0 }}
      >
        <motion.div
          className="w-[740px] h-[720px] bg-white rounded-full absolute border-[5px] border-black"
          style={{ x: -186 }}
        ></motion.div>
      </motion.div>
    </motion.section>
  );
};
