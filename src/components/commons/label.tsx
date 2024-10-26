"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { Empty } from "./icon";

export interface ILabel {
  bgColor?: string;
  fontColor?: string;
  className?: string;
  children?: ReactNode;
  hasBorder?: boolean;
  borderWidth?: number;
  px?: number;
  py?: number;
  lineHeight?: number | string;
  fontSize?: number | string;
  size?: "s" | "m" | "l";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  minWidth?: number | string;
  width?: number | string;
}

export const Label = ({
  children,
  className,
  bgColor = "bg-kitty_red",
  fontColor = "text-white",
  lineHeight = 1,
  fontSize,
  size,
  leftIcon,
  minWidth,
}: ILabel) => {
  return (
    <motion.h3
      className={` flex ${bgColor} ${fontColor} rounded-full w-fit text-center font-mplus1c font-black  label ${
        className ?? ""
      } ${size ?? ""}`}
      style={{
        lineHeight,
        fontSize,
        minWidth,
      }}
    >
      {leftIcon && <div className="mt-[1.5%]">{leftIcon}</div>}
      <div className="grow">{children}</div>
    </motion.h3>
  );
};

export const AnchorLabel = ({
  href,
  children,
  bgColor = "--var(--kitty_red)",
  fontColor,
  className,
  leftIcon = <Empty />,
  rightIcon = <Empty />,
  target,
  fontSize,
  width,
}: ILabel & {
  href: string;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      className={`rounded-full flex items-center justify-between gap-[2vw] w-fit mx-auto font-black font-mplus1c label ${
        className ?? ""
      }`}
      target={target}
      style={{ backgroundColor: bgColor, color: fontColor, width }}
    >
      <div className="basis-[10%] max-w-[12px]">{leftIcon}</div>
      <div
        className="grow whitespace-nowrap text-center leading-none"
        style={{ fontSize }}
      >
        {children}
      </div>
      {rightIcon && <div className="basis-[10%]">{rightIcon}</div>}
    </Link>
  );
};

export const ButtonLabel = ({
  children,
  bgColor = "var(--kittyred)",
  fontColor = "#ffffff",
  className,
  leftIcon,
  rightIcon,
  onClick,
  type = "button",
  disabled = false,
  fontSize,
  width,
}: ILabel & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  return (
    <motion.button
      className={`rounded-full flex items-center justify-between gap-[2vw] w-fit mx-auto font-black font-mplus1c label ${
        className ?? ""
      }`}
      style={{ backgroundColor: bgColor, color: fontColor, width }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {leftIcon && <div className="basis-[10%]">{leftIcon}</div>}
      <div className="grow whitespace-nowrap text-center" style={{ fontSize }}>
        {children}
      </div>
      {rightIcon && <div className="basis-[10%]">{rightIcon}</div>}
    </motion.button>
  );
};
