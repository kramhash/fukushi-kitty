"use client";

import { memo, useMemo, useRef } from "react";
import { motion, useMotionTemplate } from "framer-motion";

import { InterviewLine } from "./interview-line";
import { About } from "./about";
import { Logo } from "../commons";
import { useResizeObserver } from "usehooks-ts";

export const Top = memo(function Top() {
  return (
    <motion.section className="w-full relative">
      <Background />
      <InterviewLine y={-60} />
      <Logo y={-60} />
      <InterviewLine direction={-1} />
      <About />
    </motion.section>
  );
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
      className="w-full h-full bg-kitty_red absolute top-[587px]"
      style={{ backgroundImage, height: width * 0.5 }}
      suppressHydrationWarning
      ref={ref}
    ></motion.div>
  );
};
