"use client";

import { atom, useAtom, useSetAtom } from "jotai";
import { ChangeEventHandler, memo, ReactNode, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AnimatePresence, motion } from "framer-motion";
// import { useForm } from "react-hook-form";
import {
  genJobAtom,
  genNameAtom,
  genTriggerAtom,
  uploadImageAtom,
} from "@/components/states";
import { prefix } from "@/utils";
import { DisplayNumber, Label } from "@/components/commons";
import { Generator } from "./canvas";

import { formMode, GeneratedImage } from "./";

const modeAtom = atom<formMode>("form");

export const Form = () => {
  const [mode, setMode] = useAtom(modeAtom);

  return (
    <motion.section className="max-w-[964px] flex flex-col mx-auto w-[calc(100% - 20px)] mt-[125px] mb-[30px]">
      <motion.h3 className="mx-auto mb-[30px]">
        <motion.img src={prefix("assets/top/messageform/generator.svg")} />
      </motion.h3>
      <motion.section
        className="rounded-[50px] bg-white w-full text-black px-[30px] py-[40px] min-h-[500px] relative overflow-hidden border-[5px] border-black"
        layout
        transition={{ duration: 0.3 }}
      >
        {(mode == "form" || mode == "processing") && (
          <GeneratorForm key={"generator-form"} setMode={setMode} />
        )}

        {mode == "processing" && (
          <motion.div
            className="w-full h-full bg-[rgba(255,255,255,0.9)] absolute top-0 left-0"
            layout
          ></motion.div>
        )}
        <AnimatePresence mode="wait">
          {mode == "composite" && (
            <>
              <GeneratedImage />
              <Generator key={"generator-composite"} setMode={setMode} />
            </>
          )}
        </AnimatePresence>
      </motion.section>
    </motion.section>
  );
};

const GeneratorForm = memo(function GeneratorForm({
  setMode,
}: {
  setMode: (mode: formMode) => void;
}) {
  const setTrigger = useSetAtom(genTriggerAtom);
  const setName = useSetAtom(genNameAtom);
  const setJob = useSetAtom(genJobAtom);

  return (
    <motion.div layout>
      <motion.div className="flex-col md:flex-row flex gap-[40px]" layout>
        <motion.div className="basis-1/2 flex-grow flex-shrink flex flex-col gap-[25px]">
          <Input
            n={1}
            name="name"
            onChange={(e) => {
              const value = e.target.value;
              setName(value);
            }}
          >
            名前(ニックネーム可)を記入して下さい
          </Input>
          <Input
            n={2}
            name="trigger"
            onChange={(e) => {
              const value = e.target.value;
              setTrigger(value);
            }}
          >{`福祉の仕事のきっかけを
記入してください`}</Input>
          <Input
            n={3}
            name="job"
            onChange={(e) => {
              const value = e.target.value;
              setJob(value);
            }}
          >
            職業
          </Input>
        </motion.div>
        <motion.div className=" basis-1/2 flex-grow flex-shrink">
          <ImageTarget />
        </motion.div>
      </motion.div>

      <hr className="border-t-[4px] border-t-black mt-[50px] mb-[30px]" />

      <motion.div className="w-full flex flex-col justify-center gap-[30px]">
        <Input n={6} name="email" className=" w-full" hasNumber={false}>
          メールアドレス
        </Input>
        <Input
          n={5}
          name="xaccount"
          className="mb-[15px] w-full"
          hasNumber={false}
        >
          Xアカウント名
        </Input>
      </motion.div>

      <motion.div className="bg-[#f5f5f5] h-[118px]  px-[20px] pt-[20px] rounded-[20px] border-[3px] border-black mt-[60px]">
        <motion.div className="overflow-y-scroll h-full">
          <motion.div className="text-[14px] leading-[150%] h-full text-left">{`ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！`}</motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-[30px]">
        <motion.button
          onClick={() => {
            setMode("processing");
            setTimeout(() => {
              setMode("composite");
            }, 2000);
          }}
        >
          <Label borderWidth={0} py={15} px={85}>
            画像生成
          </Label>
        </motion.button>
      </motion.div>
    </motion.div>
  );
});

const Input = ({
  n,
  children,
  maxLength = 22,
  className,
  name,
  onChange,
  hasNumber = true,
}: {
  n: number;
  children?: ReactNode;
  maxLength?: number;
  className?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  hasNumber?: boolean;
}) => {
  return (
    <motion.div className={`flex items-start flex-col ${className ?? ""}`}>
      <InputTitle n={n} hasNumber={hasNumber}>
        {children}
      </InputTitle>
      <input
        className="px-[10px] py-[5px] border-[rgba(0,0,0,0.5)] border-[3px] rounded-[10px] bg-[#f5f5f5] w-full mt-[15px] text-[16px]"
        maxLength={maxLength}
        name={name}
        onChange={onChange}
      />
    </motion.div>
  );
};

const InputTitle = ({
  n,
  children,
  hasNumber,
  justifyContent = "start",
}: {
  n: number;
  children?: ReactNode;
  hasNumber?: boolean;
  justifyContent?: string;
}) => {
  return (
    <motion.div
      className="flex items-center text-left leading-[150%] gap-[10px] w-full"
      style={{ justifyContent }}
      suppressHydrationWarning
    >
      {hasNumber && (
        <DisplayNumber className="basis-[13%] shrink-0">{n}</DisplayNumber>
      )}
      <motion.div className="text-[24px] font-mplus1c font-black">
        {children}
      </motion.div>
    </motion.div>
  );
};

const ImageTarget = memo(function ImageTarget() {
  const [imageURL, setImage] = useAtom(uploadImageAtom);

  const onDrop = useCallback((file: File[]) => {
    if (file.length === 0) return;
    const reader = new FileReader();
    reader.onload = () => {
      const r = reader.result;
      console.log(typeof r);
      setImage(r as string);
    };
    reader.readAsDataURL(file[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [".jpg", ".jpeg", ".png"] },
    maxFiles: 1,
  });

  return (
    <section className="  relative" {...getRootProps()}>
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
            <motion.div>ここに画像をアップロードする</motion.div>
            <motion.button>
              <Label bgColor="#fff" fontColor="#000" borderWidth={4} px={40}>
                アップロードする
              </Label>
            </motion.button>
          </>
        )}
        {imageURL && (
          <motion.div className="h-full">
            <motion.img src={imageURL} className="h-full w-full" />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
});
