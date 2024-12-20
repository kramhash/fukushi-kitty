"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import { IGallery } from "@/types/newt";
import { prefix } from "@/utils";

import "./gallery.css";
import { BlankIcon, Label, MiniArrow, SVGTitle } from "../commons";
import { useEffect, useState } from "react";

export const Gallery = ({ data }: { data: IGallery[] }) => {
  return (
    <motion.section className="w-full relative overflow-hidden mt-[100px]">
      <SVGTitle
        src="assets/top/title-gallery.png"
        width={801}
        className="mb-[24px]"
        minScale={0.25}
      />

      <div className="text-[16px] md:text-center mx-auto max-w-[80%] font-mplus1c font-black mb-[35px]">{`ハッシュタグ「＃なにゆえ私が福祉職」で、さまざまな投稿が集まりました。`}</div>

      <GalleryInternal data={data} />
      <motion.div className="flex justify-center mt-[30px]">
        <motion.a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/search?q=%23%E3%81%AA%E3%81%AB%E3%82%86%E3%81%88%E7%A7%81%E3%81%8C%E7%A6%8F%E7%A5%89%E8%81%B7"
        >
          <Label
            bgColor="bg-white"
            fontColor="text-black"
            borderWidth={2}
            rightIcon={<MiniArrow />}
          >
            <p className="flex items-center justify-center px-[10px]">
              その他の投稿はこちら（X）
              {<BlankIcon fill="black" className="" />}
            </p>
          </Label>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

const shuffleArray = (array: IGallery[]) => {
  const cloneArray = [...array];

  const result = cloneArray.reduce((_, cur, idx) => {
    const rand = Math.floor(Math.random() * (idx + 1));
    cloneArray[idx] = cloneArray[rand];
    cloneArray[rand] = cur;
    return cloneArray;
  }, [] as IGallery[]);

  return result;
};

const GalleryInternal = ({ data }: { data: IGallery[] }) => {
  const [_data, setData] = useState<IGallery[] | null>(null);

  useEffect(() => {
    setData(shuffleArray(data));
  }, [data]);

  if (_data === null) {
    return <></>;
  }

  return (
    <motion.div className="w-[calc(100%+50px)] overflow-hidden translate-x-[-25px] pointer-events-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 40 } }}
        slidesOffsetAfter={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // onMouseEnter={() => {
        //   console.log("enter");
        // }}
        // onClick={() => {
        //   console.log("click");
        // }}
        // initialSlide={1}
      >
        {_data.map((item) => (
          <SwiperSlide key={`${item._id}`}>
            <GalleryItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

const GalleryItem = ({ data }: { data: IGallery }) => {
  return (
    <motion.div className="flex flex-col    font-black h-full w-full">
      <motion.div>
        <motion.img
          src={prefix(`assets/gallery/${data._id}.webp`)}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};
