"use client";
import { memo } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { Logo } from "./logo";

export const Marquee = memo(function Marquee() {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (x) => `${wrap(0, -800, x)}px`);
  useAnimationFrame(() => {
    baseX.set(baseX.get() - 1);
  });

  return (
    <motion.section className="border-t-[5px] border-black bg-white w-full py-[20px] overflow-hidden">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        <Logo
          width={800}
          iconPadding={100}
          paddingTop={0}
          className="shrink-0"
        />
        <Logo
          width={800}
          iconPadding={100}
          paddingTop={0}
          className="shrink-0"
        />
        <Logo
          width={800}
          iconPadding={100}
          paddingTop={0}
          className="shrink-0"
        />
      </motion.div>
    </motion.section>
  );
});
