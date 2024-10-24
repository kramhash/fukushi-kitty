"use client";
import { motion } from "framer-motion";
import { prefix } from "@/utils";

export const Logo = ({
  width = 1039,
  y = 0,
  paddingTop = 60,
  iconPadding = 166,
  className,
  iconScale = 0.16729088639201,
  iconSrc = "assets/commons/kitty.png",
}: {
  width?: number;
  y?: number;
  paddingTop?: number;
  iconPadding?: number;
  className?: string;
  iconScale?: number;
  iconSrc?: string;
}) => {
  return (
    <motion.div
      className={`relative mx-auto ${className} max-w-full`}
      style={{ width, paddingTop, paddingRight: iconPadding, y }}
    >
      <motion.img
        src={prefix("assets/commons/title.svg")}
        className="relative"
      />
      <motion.img
        src={prefix(iconSrc)}
        className="absolute bottom-0 right-0"
        style={{ y: 5 }}
        width={width * iconScale}
      />
    </motion.div>
  );
};
