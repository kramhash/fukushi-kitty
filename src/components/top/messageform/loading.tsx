"use client";

import { prefix } from "@/utils";
import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <motion.div
      className="w-full h-full bg-[rgba(255,255,255,0.9)] absolute top-0 left-0"
      layout
      exit={{ opacity: 0, transition: { delay: 0.2 } }}
    >
      <motion.div className="flex items-center flex-col h-full justify-center">
        <motion.img
          src={prefix("assets/top/messageform/loading/kitty.png")}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
        <motion.div className="flex mt-[5%]">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <motion.img
                key={`loading-${index}`}
                src={prefix(`assets/top/messageform/loading/l${index}.png`)}
                className="relative"
                animate={{
                  y: [0, 10, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
