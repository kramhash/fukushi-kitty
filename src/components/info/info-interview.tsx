"use client";

import { motion } from "framer-motion";
import { InfoInterviewBox } from "./interview";

export const InfoInterview = () => {
  return (
    <motion.div className="w-full max-w-[1024px] flex flex-col gap-[30px]">
      <InfoInterviewBox
        intId={9}
        name="中澤真希さんの場合｜介護職"
        link="中澤さん"
      ></InfoInterviewBox>
      <InfoInterviewBox
        intId={10}
        name={`星三記生さんの場合｜
サービス管理責任者(障害者支援)`}
        link="星さん"
      ></InfoInterviewBox>
    </motion.div>
  );
};
