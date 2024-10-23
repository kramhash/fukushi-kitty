"use client";
import { motion } from "framer-motion";
import { Box, Label, SmallBox, SVGTitle } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";
import { InfoInterview } from "../info/info-interview";

export const Info = () => {
  return (
    <motion.section
      className="rounded-t-[80px] bg-kitty_gray relative  w-full flex flex-col max-w-[1024px] mx-auto px-[2%]"
      style={{ y: -105 }}
    >
      <Label className="mt-[96px] mx-auto mb-[2vw]">CASESTUDY</Label>
      <motion.div className="relative flex justify-between items-end px-[3vw] w-full mb-[5%]">
        <motion.div style={{ width: "13.7%" }}>
          <motion.img src={prefix("assets/commons/kitty3.png")} alt="" />
        </motion.div>
        <motion.div style={{ x: "3%" }}>
          <SVGTitle src={"assets/top/info/title-info.png"} width={578} />
          <motion.p className="whitespace-pre-wrap font-black font-mplus1c text-16lg text-center mt-[5%]">{`福祉の仕事には、さまざまな活躍の仕方があります。
あなたにあった働き方を選べます。`}</motion.p>
        </motion.div>
        <motion.div style={{ width: "17.3%", x: "2vw" }}>
          <motion.img src={prefix("assets/commons/kitty4.png")} alt="" />
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row gap-[10px]">
        <InfoBox
          title="professional"
          description={`福祉の現場では、さまざまな専門職が活躍しています。専門性を高めるほど、気づきが増え、面白い仕事です。`}
          recommendTexts={[
            "専門性を磨いていきたい",
            "目の前の人に貢献したい人",
            "手に職をつけたい",
          ]}
          iconWidth={149}
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
          className="text-white"
          titleWidth={252}
          bgColor="bg-kitty_blue"
          iconWidth={223}
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
          className="text-white"
          titleWidth={210}
          bgColor="bg-kitty_red"
          iconWidth={127}
        ></InfoBox>
        <InfoBox
          title="coordinator"
          description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
          recommendTexts={["人と繋がるのが好き", "地域づくりに関心がある"]}
          className=""
          titleWidth={336}
          iconWidth={187}
        ></InfoBox>
      </motion.div>
      <InfoInterview />
    </motion.section>
  );
};

const InfoBox = ({
  title,

  className,
  // children,
  recommendTexts,
  titleWidth,
  bgColor,
  iconWidth,
}: // color = "",
{
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
  recommendTexts: string[];
  color?: string;
  titleWidth: number;
  bgColor?: string;
  iconWidth: number;
}) => {
  return (
    <Box className={`mb-[50px] ${className}`} bgColor={bgColor}>
      <motion.div className="flex flex-col justify-start h-full">
        <SVGTitle src={`assets/top/info/${title}.svg`} width={titleWidth} />
        {/* <motion.p className="font-notosans font-black text-[16px] mt-[50px]">
          {description}
        </motion.p> */}
        <motion.div
          className="flex justify-center mt-[20px] mx-auto grow items-center"
          style={{
            width: `clamp(${
              iconWidth * 0.5
            }px, 100vw * ${iconWidth} / 1024, ${iconWidth}px)`,
          }}
        >
          <motion.img
            src={prefix(`assets/top/info/icon/${title}.png`)}
            className="w-full h-auto"
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
          <motion.div className="absolute top-0 left-0 flex justify-center w-full">
            <motion.div
              className="overflow-hidden bg-white font-mplus1c px-[5%] py-[1%] font-black text-black rounded-[1.5rem] border-black border-[3px]"
              style={{ y: "-50%" }}
            >
              こんな人におすすめ
            </motion.div>
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
