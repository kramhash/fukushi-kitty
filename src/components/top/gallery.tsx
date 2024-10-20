"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import { IGallery } from "@/types/newt";
import { prefix } from "@/utils";

import "./gallery.css";
import { Label } from "../commons";

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
      <motion.div className="flex justify-center mt-[30px]">
        <motion.a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/hashtag/FGO"
        >
          <Label bgColor="bg-white" fontColor="text-black" borderWidth={2}>
            <div className="flex items-center gap-[5px]">
              <p>その他の投稿はこちら（X）</p>
              <div>
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3.76795C10.3333 4.53775 10.3333 6.46225 9 7.23205L3 10.6962C1.66666 11.466 -5.6841e-07 10.5037 -5.01112e-07 8.9641L-1.9827e-07 2.0359C-1.30972e-07 0.496296 1.66667 -0.465953 3 0.303847L9 3.76795Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </Label>
        </motion.a>
      </motion.div>
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
