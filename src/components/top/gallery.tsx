"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import { IGallery } from "@/types/newt";
import { prefix } from "@/utils";

import "./gallery.css";
import { BlankIcon, Label, MiniArrow, SVGTitle } from "../commons";

export const Gallery = ({ data }: { data: IGallery[] }) => {
  return (
    <motion.section className="w-full relative overflow-hidden mt-[100px]">
      <SVGTitle
        src="assets/top/title-gallery.png"
        width={801}
        className="mb-[100px]"
        minScale={0.25}
      />
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

const GalleryInternal = ({ data }: { data: IGallery[] }) => {
  return (
    <motion.div className="w-[calc(100%+50px)] overflow-hidden ">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 40 } }}
        slidesOffsetAfter={50}
        centeredSlides={true}
        // initialSlide={1}
      >
        {data.map((item) => (
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
