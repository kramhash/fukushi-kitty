"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import { IGallery } from "@/types/newt";
import { prefix } from "@/utils";

import "./gallery.css";

export const Gallery = ({ data }: { data: IGallery[] }) => {
  return (
    <motion.section className="w-full relative overflow-hidden">
      <GalleryInternal data={data} />
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
        initialSlide={1}
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
    <motion.div className="flex flex-col border-[5px] border-black bg-white rounded-[38px] font-black p-[20px] h-full w-full">
      <motion.div className="mb-[20px] flex">
        <motion.div>
          <motion.div>アカウント名</motion.div>
          <motion.div className="text-[13px]">@{data.name}</motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="mb-[30px] text-[2vw]  md:text-[min(14px,1vw)] grow">
        {data.text}
      </motion.div>

      <motion.div>
        <motion.img src={prefix(`assets/top/gallery/${data._id}.webp`)} />
      </motion.div>
    </motion.div>
  );
};
