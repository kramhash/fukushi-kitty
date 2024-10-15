"use client";
import { motion } from "framer-motion";
import { Box, Label, SmallBox } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";

export const Info = () => {
  return (
    <motion.section
      className="rounded-t-[80px] bg-kitty_gray relative  w-full flex flex-col "
      style={{ y: -105 }}
    >
      <Label className="mt-[96px] mx-auto">福祉のいろんな活躍の仕方</Label>
      <motion.div className="mb-[70px]"></motion.div>

      <InfoBox
        title="professional"
        description={`福祉の現場では、さまざまな専門職が活躍しています。専門性を高めるほど、気づきが増え、面白い仕事です。`}
        recommendTexts={[
          "専門性を磨いていきたい",
          "目の前の人に貢献したい人",
          "手に職をつけたい",
        ]}
      ></InfoBox>
      <InfoBox
        title="management"
        description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
        recommendTexts={[
          "リーダーになって良い現場を作りたい",
          "責任ある立場で働きたい",
          "キャリアアップを目指したい",
        ]}
        className="bg-kitty_blue text-white"
      ></InfoBox>
      <InfoBox
        title="planner"
        description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
        recommendTexts={[
          "人の相談に乗るのが好きだ",
          "思いを尊重した支援をしたい",
        ]}
        className="bg-kitty_red text-white"
      ></InfoBox>
      <InfoBox
        title="coordinator"
        description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
        recommendTexts={["人と繋がるのが好き", "地域づくりに関心がある"]}
        className=""
      ></InfoBox>
    </motion.section>
  );
};

const InfoBox = ({
  title,
  description,
  className,
  // children,
  recommendTexts,
}: // color = "",
{
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
  recommendTexts: string[];
  color?: string;
}) => {
  return (
    <Box className={`mb-[50px] ${className}`}>
      <motion.div className="flex flex-col justify-start">
        <motion.h3 className="text-center">
          <motion.img
            src={prefix(`assets/top/info/${title}.svg`)}
            className="mx-auto"
          />
        </motion.h3>
        <motion.p className="font-notosans font-black text-[16px] mt-[50px]">
          {description}
        </motion.p>

        <SmallBox width={"90%"} className="mx-auto my-[50px]">
          <motion.div className="font-black flex flex-col gap-[30px]">
            {recommendTexts.map((text, index) => (
              <motion.div
                key={`infobox-${index}`}
                className="flex items-center"
              >
                <motion.i>
                  <motion.img src={prefix("assets/commons/star.svg")} />
                </motion.i>
                <motion.p className="ml-[15px] text-[22px]">{text}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </SmallBox>

        <motion.div className="flex items-center">
          <Label>資格</Label>
          <motion.p className="font-notosans font-black ml-[30px]">
            介護福祉士、精神保健福祉士、保育士、ガイドヘルパーなど
          </motion.p>
        </motion.div>
      </motion.div>
    </Box>
  );
};
