"use client";

import { useAtomValue } from "jotai";
import { motion } from "framer-motion";
import { generatedImageAtom } from "@/components/states";

export const GeneratedImage = () => {
  const imageData = useAtomValue(generatedImageAtom);

  if (!imageData) {
    return <></>;
  }

  return (
    <motion.div className="relative">
      <motion.img src={`${imageData}`} />
    </motion.div>
  );
};
