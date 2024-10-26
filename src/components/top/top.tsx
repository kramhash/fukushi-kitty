"use client";

import { memo, useEffect, useMemo, useRef } from "react";
import { motion, useMotionTemplate } from "framer-motion";

import { InterviewLine } from "./interview-line";
import { About } from "./about";
import { Logo } from "../commons";
import { useResizeObserver, useWindowSize } from "usehooks-ts";
import { useAtomValue, useSetAtom } from "jotai";
import { windowSizeAtom } from "../states";
import { useScrollTo } from "@/hooks";

export const Top = memo(function Top() {
  return (
    <motion.section className="w-full relative" id="top">
      <Resize />
      <Background />
      <InterviewLine y={-60} />
      <LogoCover />
      <InterviewLine direction={-1} />
      <About />
    </motion.section>
  );
});

const LogoCover = memo(function LogoCover() {
  const { width } = useAtomValue(windowSizeAtom);
  const size = useMemo(() => {
    const scale = Math.min(1, width / 1280);
    return { width: 1039 * scale, scale };
  }, [width]);

  return (
    <Logo
      y={-60}
      width={size.width}
      iconPadding={size.scale * 130}
      imgVariants={{
        initial: { scaleY: 0 },
        enter: { scaleY: 1, transition: { delay: 1 } },
      }}
      iconVariants={{
        initial: { scale: 0 },
        enter: { scale: 1, transition: { delay: 1.2 } },
      }}
    />
  );
});

const Resize = memo(function Resize() {
  const { width = 400, height = 700 } = useWindowSize();
  const setSize = useSetAtom(windowSizeAtom);

  useEffect(() => {
    setSize({ width, height, scale: Math.min(1, width / 1280) });
  }, [setSize, width, height]);

  const scroll = useScrollTo();

  useEffect(() => {
    console.log("test");
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        console.log(hash);
        scroll(hash.replace("#", ""));
      }, 1);
    }

    window.addEventListener("load", () => {
      const hash = window.location.hash;
      console.log(hash);
    });
  }, [scroll]);

  return <></>;
});

const Background = () => {
  const ref = useRef<HTMLDivElement>(null);
  //height = 540
  const { width = 1080 } = useResizeObserver({ ref });

  const { offsetTop } = useMemo(() => {
    // const l = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

    return {
      // offsetTop: Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)),
      offsetTop: width * 1.2 * 0.5 + Math.min(width * 0.2, 200),
      bgWidth: width,
      bgHeight: width,
    };
  }, [width]);

  const backgroundImage = useMotionTemplate`radial-gradient(circle ${
    width * 0.5
  }px at 50% ${offsetTop}px , var(--grey) 0%, var(--grey) 120%, transparent 120.1%, transparent 200%)`;
  return (
    <motion.div
      className="w-full h-full bg-kitty_red absolute top-[45vw]"
      style={{ backgroundImage, height: width * 0.5 }}
      suppressHydrationWarning
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
    ></motion.div>
  );
};
