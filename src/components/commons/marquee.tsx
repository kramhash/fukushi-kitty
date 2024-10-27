"use client";
import { memo, useMemo } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { Logo } from "./logo";
import { useAtomValue } from "jotai";
import { windowSizeAtom } from "../states";

export const Marquee = memo(function Marquee() {
  const { width } = useAtomValue(windowSizeAtom);
  const size = useMemo(() => {
    const scale = Math.min(1, width / 1024);
    return {
      width: Math.min(800, 800 * scale),
      iconPadding: Math.min(100, 100 * scale),
      scale,
    };
  }, [width]);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (x) => `${wrap(0, -size.width, x)}px`);
  useAnimationFrame(() => {
    baseX.set(baseX.get() - 1);
  });

  return (
    <motion.section className="border-t-[5px] border-black bg-white w-full py-[20px] overflow-hidden pt-[3%] mt-[10%]">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        <Logo
          width={size.width}
          iconPadding={size.iconPadding}
          paddingTop={0}
          className="shrink-0"
        />
        <Logo
          width={size.width}
          iconPadding={size.iconPadding}
          paddingTop={0}
          className="shrink-0"
        />
        <Logo
          width={size.width}
          iconPadding={size.iconPadding}
          paddingTop={0}
          className="shrink-0"
        />
      </motion.div>
    </motion.section>
  );
});
