"use client";

import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useDropzone } from "react-dropzone";
import { uploadImageAtom } from "@/components/states";
import { ButtonLabel, Label } from "@/components/commons";
import { InputTitle } from "./input-title";
import { prefix } from "@/utils";

export const ImageTarget = memo(function ImageTarget() {
  const [imageURL, setImage] = useAtom(uploadImageAtom);

  const onDrop = useCallback(
    (file: File[]) => {
      if (file.length === 0) return;
      const reader = new FileReader();
      reader.onload = () => {
        const r = reader.result;
        console.log(typeof r);
        setImage(r as string);
      };
      reader.readAsDataURL(file[0]);
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [".jpg", ".jpeg", ".png"] },
    maxFiles: 1,
  });

  return (
    <section className="  relative" {...getRootProps()}>
      <InputTitle n={4} hasNumber={true}>
        画像をアップロードして下さい
        <br />
        (任意)
      </InputTitle>
      <motion.div className="relative">
        <motion.img
          src={prefix("assets/top/messageform/dragtarget.svg")}
          className="w-full "
          width={452}
          height={462}
        />
        <input {...getInputProps()} className="relative" />

        <motion.div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center p-[10px]">
          {!imageURL && (
            <>
              <motion.div className="mb-[10%]">
                <motion.img
                  src={prefix("assets/top/messageform/file.svg")}
                  width={109}
                />
              </motion.div>
              <motion.div className="mb-[3%] text-21lg font-black">
                ここに画像をアップロードする
              </motion.div>
              <ButtonLabel bgColor="#fff" fontColor="#000">
                アップロードする
              </ButtonLabel>
              {/* <motion.button className="w-full">
                <Label bgColor="bg-white" fontColor="text-black">
                  アップロードする
                </Label>
              </motion.button> */}
            </>
          )}
          {imageURL && (
            <motion.div className="h-full">
              <motion.img
                src={imageURL}
                className="h-full w-full object-contain"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
});
