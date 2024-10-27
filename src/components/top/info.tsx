"use client";
import { motion } from "framer-motion";
import { Box, kittyVariants, Label, SmallBox, SVGTitle } from "../commons";
import { ReactNode } from "react";
import { prefix } from "@/utils";
import { InfoInterview } from "../info/info-interview";
import { useMediaQuery } from "usehooks-ts";

export const Info = () => {
  const breakpoint = useMediaQuery("(min-width: 640px)");
  return (
    <motion.section
      id="casestudy"
      className="rounded-t-[42px] md:rounded-t-[80px] mt-[-105px] bg-kitty_gray relative  w-full flex flex-col mx-auto px-[2%] has-anchor mb-[50px] md:mb-[88px]"
    >
      <motion.div className="max-w-[1024px] w-full mx-auto">
        <Label className="mt-[6%] mx-auto mb-[2vw]" size="m">
          CASESTUDY
        </Label>
        <motion.div className="relative flex flex-col justify-center items-center px-[3vw] w-full mb-[10%] md:mb-[5%]">
          <SVGTitle
            src={"assets/top/info/title-info.png"}
            width={578}
            minScale={0.2}
          />

          <motion.div className="flex justify-between items-center  mt-[-2%] md:mt-0">
            <motion.div style={{ width: "17%" }} className="grow-0">
              <motion.img
                className="w-full"
                src={prefix("assets/commons/kitty3.png")}
                alt=""
                loading="lazy"
                width={148}
                height={208}
                variants={kittyVariants}
                initial="initial"
                whileInView="enter"
              />
            </motion.div>
            <motion.p
              className="whitespace-pre-wrap font-black font-mplus1c text-16lg text-center leading-[200%]"
              style={{ x: "5%" }}
              suppressHydrationWarning
            >{`福祉の仕事には、${
              breakpoint ? "" : "\n"
            }さまざまな活躍の仕方があります。
あなたにあった働き方を選べます。`}</motion.p>
            <motion.div style={{ width: "21%" }}>
              <motion.img
                className="w-full"
                src={prefix("assets/commons/kitty4.png")}
                alt=""
                width={179}
                height={217}
                loading="lazy"
                variants={kittyVariants}
                initial="initial"
                whileInView="enter"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row gap-[10px]">
          <InfoBox
            className="text-black"
            title="professional"
            description={`福祉の現場では、さまざまな専門職が活躍しています。専門性を高めるほど、気づきが増え、面白い仕事です。`}
            recommendTexts={[
              "専門性を磨いていきたい",
              "目の前の人に貢献したい人",
              "手に職をつけたい",
            ]}
            iconWidth={149}
            iconHeight={152}
            titleWidth={350}
            jobTarget="介護福祉士、精神保健福祉士、保育士、ガイドヘルパーなど"
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
            iconHeight={120}
            jobTarget="施設長、園長、エリアマネージャーなど"
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
            iconHeight={138}
            jobTarget="ケアマネジャー、生活相談員など"
          ></InfoBox>
          <InfoBox
            title="coordinator"
            description={`チームで支えていく福祉の仕事は、リーダーの存在が必要不可欠です。福祉の仕事は若くしてリーダーポジションにつきやすいのが特徴の1つ。リーダーになると給与アップも目指せます。`}
            recommendTexts={["人と繋がるのが好き", "地域づくりに関心がある"]}
            className="text-black"
            titleWidth={336}
            iconWidth={187}
            iconHeight={168}
            jobTarget="コミュニティソーシャルワーカーなど"
          ></InfoBox>
        </motion.div>
        <InfoInterview />
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
  bgColor,
  iconWidth,
  iconHeight,
  jobTarget,
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
  iconHeight: number;
  jobTarget: string;
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
            loading="lazy"
            width={iconWidth}
            height={iconHeight}
            variants={kittyVariants}
            initial="initial"
            whileInView="enter"
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

        <motion.div className="h-[2rem] flex items-center">
          <motion.p className="font-notosans font-black">{jobTarget}</motion.p>
        </motion.div>
      </motion.div>
    </Box>
  );
};
