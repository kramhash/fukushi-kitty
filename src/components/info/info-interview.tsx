"use client";

import { motion } from "framer-motion";
import { InfoInterviewBox } from "./interview";

export const InfoInterview = () => {
  return (
    <motion.div className="w-full max-w-[1024px]">
      <InfoInterviewBox intId={1}></InfoInterviewBox>
    </motion.div>
  );
};
