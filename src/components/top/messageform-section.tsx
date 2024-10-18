"use client";

import { motion } from "framer-motion";
import { Label, SpecialBox } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";
import { Form } from "./messageform";

export const MessageForm = () => {
  return (
    <motion.section className="w-full ">
      <SpecialBox bgColor="bg-kitty_blue" fontColor="text-white">
        <Label
          bgColor="bg-white"
          fontColor="text-black"
          borderWidth={0}
          fontSize="1rem"
        >
          画像生成
        </Label>
        <motion.p className="text-[16px] whitespace-pre-wrap text-left w-[80%] mx-auto leading-[160%] max-w-[620px]">{`#なにゆえ私が福祉職 ジェネレーターは、福祉職に関するメッセージを画像にできる装置です。福祉職についた理由や、福祉職の方への感謝のメッセージなど、日頃の想いを発信してみませんか？
なおハッシュタグ「#なにゆえ私が福祉職 」をつけて画像をXに投稿すると、抽選で特別なグッズをプレゼントさせていただきます。`}</motion.p>
        <motion.p className="text-[16px] whitespace-pre-wrap text-left mx-auto max-w-[620px] leading-[160%]">{`応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！`}</motion.p>

        <motion.section className="flex flex-col md:flex-row mx-auto justify-center mt-[60px] items-center md:items-stretch gap-[30px] md:gap-0">
          <Step
            step={1}
            text="東京都福祉局のアカウント（@tocho_fukuho）をフォロー＆リツイート"
          >
            <motion.img src={prefix("assets/top/messageform/step1.png")} />
          </Step>

          <motion.div className="pt-[6px] hidden md:block shrink basis-[5%]">
            <Arrow />
          </motion.div>

          <Step step={2} text="下記のジェネレーターで画像を生成">
            <motion.img src={prefix("assets/top/messageform/step2.png")} />
          </Step>

          <motion.div className="pt-[6px] hidden md:block shrink basis-[5%]">
            <Arrow />
          </motion.div>

          <Step
            step={3}
            text="生成した画像とハッシュタグ「＃なにゆえ私が福祉職」を付けてXで投稿する。※画像を付けると当選確率アップ"
          >
            <motion.img src={prefix("assets/top/messageform/step3.png")} />
          </Step>
        </motion.section>

        <motion.section className="flex flex-col mt-[30px] justify-center">
          <motion.h3 className="text-center mx-auto mb-[30px]">
            <motion.img src={prefix("assets/top/messageform/period.svg")} />
          </motion.h3>
          <motion.p className="font-mplus1c font-black text-[26px] text-center">
            2024年11月1日 (日) 00:00 ～ 11月30日(火) 23:59
          </motion.p>
        </motion.section>

        <motion.section className="flex flex-col mt-[125px] max-w-[620px] mx-auto">
          <motion.h3 className="text-center mx-auto mb-[30px]">
            <motion.img src={prefix("assets/top/messageform/present.svg")} />
          </motion.h3>
          <motion.p className="font-mplus1c text-left text-[1.2rem]">
            応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！
          </motion.p>

          <motion.div>
            <motion.p></motion.p>
          </motion.div>
        </motion.section>
        <Form />
      </SpecialBox>
    </motion.section>
  );
};

const Step = ({
  step,
  text,
  children,
}: {
  step: number;
  text: string;
  children?: ReactNode;
}) => {
  return (
    <motion.div className="flex flex-col max-w-[234px] basis-[30%]">
      <Label px={20} py={5} borderWidth={3}>{`Step${step}`}</Label>
      <motion.div className="text-[16px] md:text-[14px] lg:text-[18px] leading-[150%] text-left mt-[20px]  mb-[30px] grow">
        {text}
      </motion.div>
      <motion.div className=" self-start  md:aspect-[117/158] ">
        {children}
      </motion.div>
    </motion.div>
  );
};

const Arrow = () => {
  return (
    <svg
      width="64"
      height="24"
      viewBox="0 0 64 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <path
        d="M2 12.002L52 12.0019"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="6 6"
      />
      <path
        d="M52.0123 2.10246L61.9118 12.002L52.0123 21.9014"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 6"
      />
    </svg>
  );
};
