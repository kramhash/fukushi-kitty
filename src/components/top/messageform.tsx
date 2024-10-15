"use client";

import { motion } from "framer-motion";
import { Label, SpecialBox } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";

export const MessageForm = () => {
  return (
    <motion.section className="w-full">
      <SpecialBox bgColor="bg-kitty_blue" fontColor="text-white">
        <motion.p className="text-[16px] whitespace-pre-wrap text-left w-[80%] mx-auto leading-[160%] max-w-[620px]">{`#なにゆえ私が福祉職 ジェネレーターは、福祉職に関するメッセージを画像にできる装置です。福祉職についた理由や、福祉職の方への感謝のメッセージなど、日頃の想いを発信してみませんか？
なおハッシュタグ「#なにゆえ私が福祉職 」をつけて画像をXに投稿すると、抽選で特別なグッズをプレゼントさせていただきます。`}</motion.p>
        <motion.p className="text-[16px] whitespace-pre-wrap text-left mx-auto max-w-[620px] leading-[160%]">{`応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！応募方法がここに入ります！`}</motion.p>

        <motion.section className="flex mx-auto justify-center">
          <Step
            step={1}
            text="東京都福祉局のアカウント（@tocho_fukuho）をフォロー＆リツイート"
          >
            <motion.img src={prefix("assets/top/messageform/step1.png")} />
          </Step>
          <Step
            step={1}
            text="東京都福祉局のアカウント（@tocho_fukuho）をフォロー＆リツイート"
          >
            <motion.img src={prefix("assets/top/messageform/step1.png")} />
          </Step>
        </motion.section>
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
    <motion.div className="flex flex-col max-w-[234px] ">
      <Label px={20} py={5} borderWidth={3}>{`Step${step}`}</Label>
      <motion.div className="text-[18px] leading-[150%] text-left">
        {text}
      </motion.div>
      <motion.div>{children}</motion.div>
    </motion.div>
  );
};
