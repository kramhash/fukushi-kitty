"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { name: "TOP", href: "/hello-essential-work/" },
  { name: "お仕事紹介", href: "/hello-essential-work/#intro" },
  { name: "適職診断", href: "/hello-essential-work/#jobTest" },
  { name: "数字で見る転職データ", href: "" },
  { name: "お仕事を探す", href: "" },
  { name: "私にとって、福祉の仕事とは？", href: "" },
];

export const Header = () => {
  return (
    <motion.header className="fixed  w-full pt-[20px] z-10">
      <motion.div className="bg-white max-w-[90%] flex justify-between items-center rounded-[50px] py-[16px] px-[24px] mx-auto relative">
        <motion.div className="shrink grow-0">
          <motion.img
            src="https://www.fukushijinzai.metro.tokyo.lg.jp/hello-essential-work/img/logo.png"
            width={191}
          />
        </motion.div>
        <motion.nav className="flex gap-[5px] shrink-0 w-fit">
          {navItems.map((item, index) => (
            <motion.div key={`nav-${index}`} className="shrink-0">
              <Link href={`${item.href}`} className="text-14lg font-bold">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};
