"use client";
import { motion } from "framer-motion";
import { Box, Label, SmallBox, SVGTitle } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";

export const Info = () => {
  return (
    <motion.section
      className="rounded-t-[80px] bg-kitty_gray relative  w-full flex flex-col max-w-[1024px] mx-auto"
      style={{ y: -105 }}
    >
      <Label className="mt-[96px] mx-auto">福祉のいろんな活躍の仕方</Label>
      <motion.div className="mb-[70px]"></motion.div>

      <motion.div className="flex flex-col md:flex-row gap-[10px]">
        <InfoBox
          title="professional"
          description={`福祉の現場では、さまざまな専門職が活躍しています。専門性を高めるほど、気づきが増え、面白い仕事です。`}
          recommendTexts={[
            "専門性を磨いていきたい",
            "目の前の人に貢献したい人",
            "手に職をつけたい",
          ]}
          titleWidth={350}
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
          titleWidth={252}
        ></InfoBox>
      </motion.div>
      <motion.div className=" flex flex-col md:flex-row gap-[10px]">
        <InfoBox
          title="planner"
          description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
          recommendTexts={[
            "人の相談に乗るのが好きだ",
            "思いを尊重した支援をしたい",
          ]}
          className="bg-kitty_red text-white"
          titleWidth={210}
        ></InfoBox>
        <InfoBox
          title="coordinator"
          description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
          recommendTexts={["人と繋がるのが好き", "地域づくりに関心がある"]}
          className=""
          titleWidth={336}
        ></InfoBox>
      </motion.div>
    </motion.section>
  );
};

const InfoBox = ({
  title,

  className,
  // children,
  recommendTexts,
  titleWidth,
}: // color = "",
{
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
  recommendTexts: string[];
  color?: string;
  titleWidth: number;
}) => {
  return (
    <Box className={`mb-[50px] ${className}`}>
      <motion.div className="flex flex-col justify-start">
        <SVGTitle src={`assets/top/info/${title}.svg`} width={titleWidth} />
        {/* <motion.p className="font-notosans font-black text-[16px] mt-[50px]">
          {description}
        </motion.p> */}
        <motion.div className="flex justify-center mt-[20px]">
          <motion.img
            src={prefix("assets/top/heart.png")}
            className="w-[30%]"
          />
        </motion.div>

        <SmallBox width={"100%"} className="mx-auto my-[50px]">
          <motion.div className="font-black flex flex-col gap-[14px]">
            {recommendTexts.map((text, index) => (
              <motion.div
                key={`infobox-${index}`}
                className="flex items-center"
              >
                <motion.i className="grow-0 shrink">
                  <motion.img
                    className="w-full"
                    src={prefix("assets/commons/star.svg")}
                    width={34}
                    height={34}
                  />
                </motion.i>
                <motion.p className="ml-[15px] 1rem grow w-full">
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </SmallBox>

        <motion.div className="">
          <motion.p className="font-notosans font-black ">
            介護福祉士、精神保健福祉士、保育士、ガイドヘルパーなど
          </motion.p>
        </motion.div>
      </motion.div>
    </Box>
  );
};
