"use client";

import { motion } from "framer-motion";

export const BackArrow = ({ rotation }: { rotation?: number }) => {
  return (
    <motion.svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pb-[11%]"
      style={{ rotate: rotation }}
    >
      <path
        d="M11 2L2 8L11 14"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export const NextArrow = () => {
  return <BackArrow rotation={180} />;
};

export const Empty = () => {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pb-[11%]"
    ></svg>
  );
};
