"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { motion } from "framer-motion";
import {
  formDataAtom,
  generatedImageAtom,
  modeAtom,
  uploadImageAtom,
} from "@/components/states";
import { isDesktop, isMobile } from "react-device-detect";
import { AnchorLabel, ButtonLabel } from "@/components/commons";
import { prefix } from "@/utils";
import { useResetAtom } from "jotai/utils";
import { useCallback, useEffect } from "react";
import { useScrollTo, useSendForm } from "@/hooks";

const url =
  "https://www.fukushijinzai.metro.tokyo.lg.jp/hello-essential-work/pr-gekkan/";

export const GeneratedImage = () => {
  const imageData = useAtomValue(generatedImageAtom);
  const setMode = useSetAtom(modeAtom);
  const resetUploadImage = useResetAtom(uploadImageAtom);
  const scroll = useScrollTo();
  const formData = useAtomValue(formDataAtom);

  const reset = useCallback(async () => {
    resetUploadImage();
    setMode("form");

    await new Promise((resolve) => setTimeout(resolve, 100));

    scroll("generator-form");
  }, [resetUploadImage, scroll, setMode]);

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
      await navigator.share({
        text: `#なにゆえ私が福祉職\n${url}`,
        url,
        files: [file],
      });
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

      {isMobile && (
        <motion.div className="flex justify-center mb-[40px] md:mb-[10%] mt-[5%] font-mplus1c font-black">
          画像を長押しでダウンロード
        </motion.div>
      )}

      <motion.p className="w-[90%] mx-auto mt-[4.5%] mb-[35px] md:mb-[6%] flex justify-center">
        <motion.img
          src={prefix("assets/top/messageform/generated.png")}
          width={1600}
          height={1600}
        />
      </motion.p>

      <motion.div className="flex justify-center md:w-[90%] mx-auto gap-[4%]">
        {isMobile && (
          <ButtonLabel
            onClick={share}
            bgColor="#000"
            width={"100%"}
            fontSize={"var(--font-20-static)"}
          >
            シェアする
          </ButtonLabel>
        )}
        {!isMobile && (
          <AnchorLabel
            href={`https://x.com/intent/post?hashtags=なにゆえ私が福祉職\n${url}`}
            target="_blank"
            bgColor="#000"
            fontColor="#fff"
            width={"100%"}
            fontSize={"var(--font-20-static)"}
          >
            Xでシェアする
          </AnchorLabel>
        )}
        {isDesktop && (
          <ButtonLabel
            onClick={download}
            width={"100%"}
            fontSize={"var(--font-20-static)"}
          >
            画像をダウンロード
          </ButtonLabel>
        )}
        {/* <motion.button className="basis-1/2 w-full h-full flex" onClick={share}>
          <Label
            className="w-full"
            size="l"
            bgColor="bg-black"
            fontColor="text-white"
          >
            Xでシェアする
          </Label>
        </motion.button> */}
        {/* <motion.button
          className="basis-1/2 w-full h-full flex"
          onClick={download}
        >
          <Label className="w-full h-full" size="l">
            画像をダウンロード
          </Label>
        </motion.button>*/}
      </motion.div>

      <motion.div className="flex justify-center mt-[35px] md:mt-[5%] w-auto md:w-[90%] mx-auto">
        <ButtonLabel
          onClick={reset}
          width={"100%"}
          fontSize={"var(--font-20-static)"}
        >
          もう一度生成する
        </ButtonLabel>
      </motion.div>
    </motion.div>
  );
};
