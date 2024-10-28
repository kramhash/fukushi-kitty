"use client";

import { motion, Variants } from "framer-motion";
import { Label, SpecialBox, SVGTitle } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";
import { Form, PresentSection } from "./messageform";

export const MessageForm = () => {
  return (
    <motion.section className="w-full ">
      <SpecialBox bgColor="bg-kitty_blue" fontColor="text-white">
        <motion.div className="flex justify-center mb-[5%]">
          <Label
            bgColor="bg-white"
            fontColor="text-kitty_red"
            borderWidth={0}
            px={60}
            py={15}
            className="noborder"
          >
            画像生成
          </Label>
        </motion.div>

        <motion.div className="max-w-[744px] mx-auto w-[80%] mb-[50px]">
          <SVGTitle
            src={"assets/top/messageform/message-title.svg"}
            alt="なにゆえ私が福祉職？メッセージを投稿しよう！"
            width={712}
            height={150}
            minScale={0.3}
          />
        </motion.div>

        <motion.p className=" whitespace-pre-wrap text-left w-[80%] mx-auto leading-[160%] max-w-[620px]">{`#なにゆえ私が福祉職 ジェネレーターは、福祉職で働く「理由」や「きっかけ」を画像にできる装置です。日頃の想いを発信してみませんか？なおハッシュタグ「#なにゆえ私が福祉職 」をつけて、生成した画像をXまたはInstagramに投稿すると、抽選で特別なグッズがGETできるチャンス！ぜひ、皆さんの話を聞かせてくださいね。`}</motion.p>

        <motion.div className="relative aspect-[10/6] w-full">
          <motion.img
            src={prefix("assets/top/messageform/img1.webp")}
            className="absolute top-1/2 left-1/2"
            width={354}
            height={354}
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
            loading="lazy"
          />
          <motion.img
            src={prefix("assets/top/messageform/img3.webp")}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "min(30vw, 354px)",
            }}
            width={354}
            height={354}
            initial={{ rotate: 0, x: "-50%", y: "-50%" }}
            whileInView={{ rotate: 12.9, x: "-100%", y: "-60%" }}
            viewport={{ margin: "0px 0px -300px 0px", once: true }}
            loading="lazy"
          />

          <motion.img
            src={prefix("assets/top/messageform/img2.webp")}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "min(30vw, 354px)",
            }}
            width={354}
            height={354}
            initial={{ rotate: 0, x: "-50%", y: "-50%" }}
            whileInView={{ rotate: -5.8, x: "-50%", y: "-35%" }}
            viewport={{ margin: "0px 0px -300px 0px", once: true }}
            loading="lazy"
          />
        </motion.div>

        <motion.section className="max-w-[620px] mx-auto">
          <SVGTitle src="assets/top/messageform/howto.svg" width={248} />
          <motion.p className="mt-[5%] w-[80%] mx-auto leading-[160%]">{`本サイトで生成した画像と「#なにゆえ私が福祉職」のハッシュタグをつけて、XかInstagramにて投稿してください。鍵アカウント(非公開)の場合は、対象となりませんのでお気をつけください。`}</motion.p>
        </motion.section>

        <motion.section
          className="flex flex-col md:flex-row mx-auto justify-center mt-[60px] items-center md:items-stretch gap-12 md:gap-0 mb-[92px]"
          transition={{ staggerChildren: 0.2 }}
          initial={"initial"}
          whileInView={"enter"}
          viewport={{ once: true }}
        >
          <Step
            step={1}
            text="「なにゆえ私が福祉職ジェネレーター」で画像を生成。"
          >
            <motion.img
              src={prefix("assets/top/messageform/step1-img.webp")}
              className="w-full"
              loading="lazy"
              width={237}
              height={237}
            />
          </Step>

          <motion.div
            className="pt-[6px] hidden md:block shrink basis-[5%]"
            variants={arrowVariants}
          >
            <Arrow />
          </motion.div>

          <Step step={2} text="XまたはInstagramをひらく(両方での投稿も歓迎)">
            <motion.img
              src={prefix("assets/top/messageform/step2-img.webp")}
              className="w-full"
              loading="lazy"
              width={234}
              height={357}
            />
          </Step>

          <motion.div
            className="pt-[6px] hidden md:block shrink basis-[5%]"
            variants={arrowVariants}
          >
            <Arrow />
          </motion.div>

          <Step
            step={3}
            text="ハッシュタグ「#なにゆえ私が福祉職」と生成した画像を添えて投稿"
          >
            <motion.img
              src={prefix("assets/top/messageform/step3-img.webp")}
              className="w-full"
              loading="lazy"
              width={218}
              height={172}
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
            <span>日 (金) 〜 </span>
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

const stepVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const arrowVariants: Variants = {
  initial: { x: -10, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { duration: 0.3 } },
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
    <motion.div
      className="flex flex-col max-w-[234px] basis-[30%]"
      variants={stepVariants}
    >
      <Label
        px={20}
        py={5}
        borderWidth={3}
        className="mx-auto"
        size="s"
        minWidth={"auto"}
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
