"use client";
import { motion, Variants } from "framer-motion";
import { prefix } from "@/utils";

export const Logo = ({
  width = 1039,
  y = 0,
  paddingTop = 60,
  iconPadding = 166,
  className,
  iconScale = 0.16729088639201,
  iconSrc = "assets/commons/kitty.png",
  imgVariants,
  iconVariants,
}: {
  width?: number;
  y?: number;
  paddingTop?: number;
  iconPadding?: number;
  className?: string;
  iconScale?: number;
  iconSrc?: string;
  imgVariants?: Variants;
  iconVariants?: Variants;
}) => {
  return (
    <motion.div
      className={`relative mx-auto ${className} max-w-full`}
      style={{ width, paddingTop, paddingRight: iconPadding, y }}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
    >
      <motion.img
        src={prefix("assets/commons/title.svg")}
        className="relative"
        width={2037}
        variants={imgVariants}
      />
      <motion.img
        src={prefix(iconSrc)}
        className="absolute bottom-0 right-0"
        style={{ y: 5 }}
        width={width * iconScale}
        loading="lazy"
        variants={iconVariants}
      />
    </motion.div>
  );
};
