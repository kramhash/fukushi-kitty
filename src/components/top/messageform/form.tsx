"use client";

import { useAtom } from "jotai";
import { memo, ReactNode, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { uploadImageAtom } from "../../states";
import { prefix } from "@/utils";
import { DisplayNumber, Label } from "@/components/commons";

export const Form = () => {
  console.log("form");
  return (
    <motion.section className="max-w-[964px] flex flex-col mx-auto w-[calc(100% - 20px)] mt-[125px] mb-[30px]">
      <motion.h3 className="mx-auto mb-[30px]">
        <motion.img src={prefix("assets/top/messageform/generator.svg")} />
      </motion.h3>
      <motion.section className="rounded-[50px] bg-white w-full text-black px-[30px] py-[40px]">
        <motion.div className="md:flex gap-[40px]">
          <motion.div className="basis-1/2 flex-grow flex-shrink flex flex-col gap-[25px]">
            <Input n={1}>名前を記入して下さい</Input>
            <Input n={2}>{`福祉の仕事のきっかけを
記入してください`}</Input>
            <Input n={3}>メールアドレス</Input>
          </motion.div>
          <motion.div className=" basis-1/2 flex-grow flex-shrink">
            <ImageTarget />
          </motion.div>
        </motion.div>
        <motion.div className="bg-[#f5f5f5] h-[118px]  px-[20px] py-[20px] rounded-[20px] border-[3px] border-black mt-[60px]">
          <motion.div className="overflow-y-scroll h-full">
            <motion.div className="text-[14px] leading-[150%] h-full text-left">{`ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！`}</motion.div>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.button>
            <Label borderWidth={0} py={15} px={85}>
              画像生成
            </Label>
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

const Input = ({ n, children }: { n: number; children?: ReactNode }) => {
  return (
    <motion.div className="flex items-start flex-col">
      <InputTitle n={n}>{children}</InputTitle>
      <input className="px-[10px] py-[5px] border-[rgba(0,0,0,0.5)] border-[3px] rounded-[10px] bg-[#f5f5f5] w-full mt-[15px]" />
    </motion.div>
  );
};

const InputTitle = ({ n, children }: { n: number; children?: ReactNode }) => {
  return (
    <motion.div className="flex items-center text-left leading-[150%] gap-[10px]">
      <DisplayNumber>{n}</DisplayNumber>
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
          <motion.div className="">
            <motion.img src={imageURL} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
});
