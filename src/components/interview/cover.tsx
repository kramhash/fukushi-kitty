import { memo, useMemo } from "react";
import type { IArticle } from "@/types/newt";
import { motion } from "framer-motion";
import { prefix } from "@/utils";

export const Cover = memo(function Cover({ data }: { data: IArticle }) {
  const { img } = useMemo(() => {
    return {
      img: data.mainImage.src,
    };
  }, [data]);

  return (
    <motion.div className="relative">
      <motion.div className="overflow-hidden aspect-[369/428] md:aspect-[369/410] relative">
        <motion.div className="p-[3%] md:p-[1.5%] w-full absolute">
          <motion.img
            src={prefix(`assets/interview/main-${data.id}.webp`)}
            alt=""
            className="rounded-t-[20px] md:rounded-t-[60px] top-0 w-full"
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[25%]"
            style={{ x: "-54%", y: "20%" }}
          >
            <motion.img
              src={prefix(`assets/commons/beforeafter.png`)}
              className="w-full"
              loading="lazy"
              width={209}
              height={46}
            />
          </motion.div>
        </motion.div>

        <motion.img
          src={prefix("assets/interview/mask-blue.svg")}
          className="absolute top-0"
          style={{ y: "2%" }}
        />

        <motion.img
          src={prefix("assets/interview/mask-white.svg")}
          className="absolute top-0 translate-y-[60%] md:translate-y-[55%]"
        />
      </motion.div>
      <motion.div className="absolute top-0 text-white mt-[50%] ml-[3%] font-mplus1c font-extrabold">
        <motion.img
          src={prefix(`assets/interview/copy.svg`)}
          className="w-[40%] max-w-[228px]"
        />
        <motion.p className="text-22xs   pr-[5%] leading-[130%] mb-[3%] mt-[2%]">
          {data.motivation}
        </motion.p>
        <motion.p className="text-16xs  whitespace-pre-wrap">{`${data.belong}\n${data.job}`}</motion.p>
        <motion.p className="text-16xs">{data.name}</motion.p>
      </motion.div>
    </motion.div>
  );
});
