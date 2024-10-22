"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { motion } from "framer-motion";
import {
  formDataAtom,
  generatedImageAtom,
  modeAtom,
  uploadImageAtom,
} from "@/components/states";
import { Label } from "@/components/commons";
import { prefix } from "@/utils";
import { useResetAtom } from "jotai/utils";
import { useCallback, useEffect } from "react";
import { useScrollTo, useSendForm } from "@/hooks";

export const GeneratedImage = () => {
  const imageData = useAtomValue(generatedImageAtom);
  const setMode = useSetAtom(modeAtom);
  const resetUploadImage = useResetAtom(uploadImageAtom);
  const scroll = useScrollTo("generator-form");
  const formData = useAtomValue(formDataAtom);

  const reset = useCallback(async () => {
    resetUploadImage();
    setMode("form");

    await new Promise((resolve) => setTimeout(resolve, 100));

    scroll();
  }, []);

  useSendForm({ data: formData, dataUrl: imageData });

  useEffect(() => {}, []);

  const decode = useCallback((data: string) => {
    const decodeData = atob(data.replace(/^.*,/, ""));
    const buffers = new Uint8Array(decodeData.length);
    for (let i = 0; i < decodeData.length; i++) {
      buffers[i] = decodeData.charCodeAt(i);
    }
    try {
      const blob = new Blob([buffers.buffer], {
        type: "image/png",
      });
      return blob;
    } catch (e) {
      console.error(e);
      return null;
    }
  }, []);

  const share = useCallback(async () => {
    if (imageData === null) return;

    const blob = decode(imageData);
    if (!blob) return;

    const file = new File([blob], "fukushi-generator.png", {
      type: "image/png",
    });

    try {
      await navigator.share({ text: "これはテストです #test", files: [file] });
    } catch (e) {
      console.error(e);
    }
  }, [imageData, decode]);

  const download = useCallback(() => {
    if (imageData) {
      const a = document.createElement("a");
      a.href = imageData;
      a.download = "generated.png";
      a.click();
    }
  }, [imageData]);

  if (!imageData) {
    return <></>;
  }

  return (
    <motion.div className="relative pt-[10%]" exit={{ opacity: 0 }}>
      <motion.img src={`${imageData}`} />
      <motion.p className="w-[90%] mx-auto mt-[4.5%] mb-[6%] flex justify-center">
        <motion.img
          src={prefix("assets/top/messageform/generated.png")}
          width={1600}
          height={1600}
        />
      </motion.p>

      <motion.div className="flex justify-center w-[90%] mx-auto gap-[4%]">
        <motion.button className="basis-1/2 w-full h-full flex" onClick={share}>
          <Label
            className="w-full"
            size="l"
            bgColor="bg-black"
            fontColor="text-white"
          >
            Xでシェアする
          </Label>
        </motion.button>
        <motion.button
          className="basis-1/2 w-full h-full flex"
          onClick={download}
        >
          <Label className="w-full h-full" size="l">
            画像をダウンロード
          </Label>
        </motion.button>
      </motion.div>

      <motion.div className="flex justify-center mt-[5%]">
        <motion.button className="w-full" onClick={reset}>
          <Label>もう一度生成する</Label>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
