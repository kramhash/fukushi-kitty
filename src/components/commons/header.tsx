"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { prefix } from "@/utils";

const navItems = [
  { name: "TOP", href: "/#top" },
  { name: "インタビュー", href: "/#interview" },
  { name: "福祉のいろんな活躍の仕方", href: "/#casestudy" },
  { name: "画像ジェネレーター", href: "/#generator-form" },
];

// const baseURL = "https://www.fukushijinzai.metro.tokyo.lg.jp";

export const Header = () => {
  const [state, setState] = useState("init");
  // const scroll = useScrollTo();

  useEffect(() => {
    const hashchange = () => {
      // console.log("hashchange", e.newURL.split("#")[1]);
      // scroller.scrollTo(e.newURL.split("#")[1], {});

      setTimeout(() => {
        setState("init");
      }, 1);
    };
    window.addEventListener("hashchange", hashchange);
    return () => {
      window.removeEventListener("hashchange", hashchange);
    };
  }, [state]);

  return (
    <motion.header className="fixed  w-full pt-[20px] z-10 top-0 left-0">
      <motion.div
        className="bg-white max-w-[90%] py-[16px] px-[24px] mx-auto relative header overflow-hidden"
        initial={{ borderRadius: 50 }}
        animate={{
          // borderRadius: state == "init" ? 50 : 25,
          transition: { duration: state == "init" ? 1 : 0, ease: "easeOut" },
        }}
      >
        <motion.div className="flex justify-between items-center">
          <motion.div className="shrink grow-0 w-[11vw] min-w-[70px] max-w-[118px]">
            <motion.img
              src={prefix("assets/commons/tokyo.png")}
              width={118}
              className="w-full"
            />
          </motion.div>
          <motion.a
            className={`relative md:hidden cursor-pointer`}
            onClick={() => {
              setState(state == "open" ? "init" : "open");
            }}
          >
            <MenuBar state={state} />
          </motion.a>
          <motion.nav className="hidden md:flex gap-[2vw] shrink-0 w-fit items-center leading-none">
            {navItems.map((item, index) => (
              <motion.div key={`nav-${index}`} className="shrink-0">
                <Link
                  href={`${item.href}`}
                  className="text-14lg font-bold"
                  // target="_blank"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>

        <motion.div
          className="overflow-hidden relative"
          animate={state}
          initial="init"
          variants={{
            init: { height: 0 },
            open: { height: 200, transition: { duration: 0.3 } },
          }}
        >
          <motion.div className="flex flex-col  items-center mt-[30px]">
            {navItems.map((item, index) => (
              <motion.a
                key={`nav-${index}`}
                className="block font-bold text-14"
                style={{ marginBottom: 20 }}
                href={`${item.href}`}
                // onTouchEnd={() => {
                //   setState("init");
                // }}
                // onClick={() => {
                //   setState("init");
                //   // scroll(`${item.href.replace("#", "")}`);
                //   return true;
                // }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

const MenuBar = ({ state }: { state?: string }) => {
  return (
    <motion.svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1 6.5H27"
        stroke="black"
        strokeLinecap="round"
        animate={state}
        className={"origin-top-right"}
        variants={{
          init: { rotate: "0deg" },
          open: { x: -5, y: 5, rotate: "45deg" },
        }}
      />

      <motion.path
        d="M1 12.5H27"
        stroke="black"
        strokeLinecap="round"
        animate={state}
        initial="init"
        variants={{
          init: { pathLength: 1, opacity: 1 },
          open: { pathLength: 0, opacity: 0 },
        }}
      />
      <motion.path
        className={"origin-bottom-left"}
        d="M1 18.5H27"
        stroke="black"
        strokeLinecap="round"
        animate={state}
        variants={{
          init: { rotate: "0deg" },
          open: { x: -5, y: -6, rotate: "-45deg" },
        }}
      />
    </motion.svg>
  );
};
