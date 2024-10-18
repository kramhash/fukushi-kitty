"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SVGTitle = ({ children }: { children?: ReactNode }) => {
  return <motion.h3>{children}</motion.h3>;
};
