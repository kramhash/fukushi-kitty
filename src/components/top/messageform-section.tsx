"use client";

import { motion } from "framer-motion";
import { Label, SpecialBox, SVGTitle } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";
import { Form, PresentSection } from "./messageform";

export const MessageForm = () => {
  return (
    <motion.section className="w-full ">
      <SpecialBox bgColor="bg-kitty_blue" fontColor="text-white">
        <motion.div className="flex justify-center mb-[73px]">
          <Label
            bgColor="bg-white"
            fontColor="text-kitty_red"
            borderWidth={0}
            fontSize="1rem"
            px={60}
            py={15}
          >
            画像生成
          </Label>
        </motion.div>

        <motion.div className="max-w-[744px] mx-auto w-[72.5%] mb-[50px]">
          <motion.h2>
            <motion.img
              src={prefix("assets/top/messageform/message-title.svg")}
              title="なにゆえ私が福祉職？メッセージを投稿しよう！"
              width={"100%"}
            />
          </motion.h2>
        </motion.div>

        <motion.p className=" whitespace-pre-wrap text-left w-[80%] mx-auto leading-[160%] max-w-[620px]">{`#なにゆえ私が福祉職 ジェネレーターは、福祉職で働く「理由」や「きっかけ」を画像にできる装置です。日頃の想いを発信してみませんか？なおハッシュタグ「#なにゆえ私が福祉職 」をつけて、生成した画像をXに投稿すると、抽選で特別なグッズがGETできるチャンス！ぜひ、皆さんの話を聞かせてくださいね。`}</motion.p>

        <motion.div className="relative aspect-[10/6] w-full">
          <motion.img
            src={prefix("assets/top/messageform/img1.png")}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "min(30vw, 354px)",
              // rotate: -12.34,

              // x: "138%",
              // y: "15%",
            }}
            initial={{
              rotate: 0,
              x: "-50%",
              y: "-50%",
            }}
            whileInView={{
              rotate: -12.34,
              x: "0%",
              y: "-66%",
            }}
            // transition={{ stiffness: 100 }}
            viewport={{ margin: "0px 0px -300px 0px", once: true }}
          />
          <motion.img
            src={prefix("assets/top/messageform/img3.png")}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "min(30vw, 354px)",
            }}
            initial={{ rotate: 0, x: "-50%", y: "-50%" }}
            whileInView={{ rotate: 12.9, x: "-100%", y: "-60%" }}
            viewport={{ margin: "0px 0px -300px 0px", once: true }}
          />

          <motion.img
            src={prefix("assets/top/messageform/img2.png")}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "min(30vw, 354px)",
            }}
            initial={{ rotate: 0, x: "-50%", y: "-50%" }}
            whileInView={{ rotate: -5.8, x: "-50%", y: "-35%" }}
            viewport={{ margin: "0px 0px -300px 0px", once: true }}
          />
        </motion.div>

        <motion.section className="flex flex-col md:flex-row mx-auto justify-center mt-[60px] items-center md:items-stretch gap-12 md:gap-0 mb-[92px]">
          <Step
            step={1}
            text="東京都福祉局のアカウント（@tocho_fukuho）をフォロー＆リツイート"
          >
            <motion.img
              src={prefix("assets/top/messageform/step1-img.png")}
              className="w-full"
            />
          </Step>

          <motion.div className="pt-[6px] hidden md:block shrink basis-[5%]">
            <Arrow />
          </motion.div>

          <Step step={2} text="下記のジェネレーターで画像を生成">
            <motion.img
              src={prefix("assets/top/messageform/step2-img.png")}
              className="w-full"
            />
          </Step>

          <motion.div className="pt-[6px] hidden md:block shrink basis-[5%]">
            <Arrow />
          </motion.div>

          <Step
            step={3}
            text="生成した画像とハッシュタグ「＃なにゆえ私が福祉職」を付けてXで投稿する。※画像を付けると当選確率アップ"
          >
            <motion.img
              src={prefix("assets/top/messageform/step3-img.png")}
              className="w-full"
            />
          </Step>
        </motion.section>

        <motion.section className="flex flex-col justify-center">
          <SVGTitle src="assets/top/messageform/period.svg" width={248} />
          <motion.p className="font-mplus1c font-black text-center mt-[20px] text-[1.625rem] leading-[150%]">
            <span>2024年</span>
            <span className="text-[2.875rem]">11</span>
            <span>月</span>
            <span className="text-[2.875rem]">1</span>
            <span>日 (金) 00:00 ～ </span>
            <span className="text-[2.875rem]">11</span>
            <span>月</span>
            <span className="text-[2.875rem]">30</span>
            <span>日(土) 23:59</span>
          </motion.p>
        </motion.section>

        <PresentSection />

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
      <Label
        px={20}
        py={5}
        borderWidth={3}
        className="mx-auto"
        size="s"
        fontSize={"--var(--font-26lg)"}
      >{`Step${step}`}</Label>
      <motion.div className=" text-[1.125rem]  leading-[150%] text-left  my-4 grow">
        {text}
      </motion.div>
      <motion.div className=" self-start  md:aspect-[234/357] w-full ">
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
