"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { prefix } from "@/utils";

export const TopBanner = () => {
  return (
    <motion.div className="relative">
      <Link
        href="/#generator-form"
        className="absolute translate-y-[115%] md:-translate-y-[25%] top-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:right-[5%] max-w-[370px] w-[60%] md:w-[36%]"
      >
        <motion.div
          className="max-w-[370px] w-full"
          initial="initial"
          whileInView="enter"
        >
          <motion.img
            src={prefix("assets/top/banner/base.webp")}
            variants={{ initial: { opacity: 0 }, enter: { opacity: 1 } }}
          />
          <motion.img
            src={prefix("assets/top/banner/img2.webp")}
            className="absolute w-[54.6%] top-0 right-0"
            variants={{
              initial: { x: "-30%", y: "-53%", rotate: "0deg", opacity: 0 },
              enter: {
                x: "-15.5%",
                y: "-83%",
                rotate: "-9.26deg",
                opacity: 1,
                transition: { delay: 0.5 },
              },
            }}
          />
          <motion.img
            src={prefix("assets/top/banner/img1.webp")}
            className="absolute w-[54.6%] top-0 left-0"
            variants={{
              initial: { x: "30%", y: "-53%", rotate: "-5deg", opacity: 0 },
              enter: {
                x: "17%",
                y: "-88%",
                rotate: "6.51deg",
                opacity: 1,
                transition: { delay: 0.3 },
              },
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};
