"use client";

import { useAtom, useSetAtom } from "jotai";
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useForm } from "react-hook-form";
import { formDataAtom } from "@/components/states";

import { Label, SVGTitle } from "@/components/commons";
import { Generator } from "./canvas";
import { GeneratedImage, ImageTarget, Input } from "./";
import { modeAtom } from "@/components/states";
import type { formMode, IForm } from "@/types";
import { useScrollTo } from "@/hooks";
import { useForm } from "react-hook-form";
import { FormRule } from "./form-rule";

export const Form = () => {
  const [mode, setMode] = useAtom(modeAtom);

  return (
    <motion.section
      className="max-w-[964px] flex flex-col mx-auto w-[calc(100% - 20px)] mt-[125px] mb-[30px] has-anchor"
      id="generator-form"
    >
      <SVGTitle src="assets/top/messageform/generator.svg" width={558} />
      <motion.section
        className="rounded-[50px] bg-white w-full text-black px-[5%] py-[40px] min-h-[500px] relative overflow-hidden border-[5px] border-black mt-[20px]"
        layout
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {mode == "composite" && (
            <>
              <GeneratedImage />
            </>
          )}
          {(mode == "form" || mode == "processing") && (
            <GeneratorForm key={"generator-form"} setMode={setMode} />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {mode == "processing" && (
            <motion.div
              className="w-full h-full bg-[rgba(255,255,255,0.9)] absolute top-0 left-0"
              layout
              exit={{ opacity: 0, transition: { delay: 0.2 } }}
              key={"loading"}
            ></motion.div>
          )}
        </AnimatePresence>

        <Generator key={`generator-composite`} />
      </motion.section>
    </motion.section>
  );
};

const GeneratorForm = memo(function GeneratorForm({
  setMode,
}: {
  setMode: (mode: formMode) => void;
}) {
  const [formData, setForm] = useAtom(formDataAtom);
  const scroll = useScrollTo("generator-form");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ mode: "onChange" });

  const onSubmit = handleSubmit(async (data) => {
    console.log("on submit", data);

    setForm(data);
    scroll();
    setMode("processing");
    // setTimeout(() => {
    //   setMode("composite");
    // }, 2000);
  });

  return (
    <form onSubmit={onSubmit}>
      <motion.div layout exit={{ opacity: 0 }}>
        <motion.div className="flex-col md:flex-row flex gap-[40px]" layout>
          <motion.div className="basis-1/2 flex-grow flex-shrink flex flex-col gap-[25px]">
            <Input
              n={1}
              name="name"
              register={register("name", FormRule.name)}
              maxLength={10}
              errors={errors.name}
              placeholder={"名前"}
              defaultValue={formData.name}
            >
              名前(ニックネーム可)を記入して下さい
            </Input>
            <Input
              n={2}
              name="job"
              errors={errors.job}
              placeholder={"職種"}
              register={register("job", FormRule.job)}
              defaultValue={formData.job}
            >
              職種を記入して下さい
            </Input>
            <Input
              n={3}
              name="trigger"
              register={register("trigger", FormRule.trigger)}
              errors={errors.trigger}
              placeholder={"働くきっかけ"}
              defaultValue={formData.trigger}
            >{`福祉職で働く理由やきっかけを記入してください`}</Input>
          </motion.div>
          <motion.div className=" basis-1/2 flex-grow flex-shrink">
            <ImageTarget />
          </motion.div>
        </motion.div>

        <hr className="border-t-[4px] border-t-black mt-[50px] mb-[30px]" />

        <motion.div className="w-full flex flex-col justify-center gap-[30px] max-w-[534px] mx-auto">
          <motion.div>
            <Input
              n={6}
              name="email"
              className=" w-full"
              hasNumber={false}
              labelJustify="center"
              register={register("email", FormRule.email)}
              errors={errors.email}
              placeholder="メールアドレス"
              defaultValue={formData.email}
            >
              ご連絡先(メールアドレス)
            </Input>
            <motion.p className="mt-[1%] text-14 md:text-14md">
              本キャンペーンの当選者には、キャンペーン期間終了後の12月9日(月)頃までにメールにてご連絡させていただきます。
            </motion.p>
          </motion.div>

          <motion.div>
            <Input
              n={5}
              name="xaccount"
              className="w-full"
              hasNumber={false}
              labelJustify="center"
              errors={errors.xaccount}
              register={register("xaccount", FormRule.xaccount)}
            >
              SNSアカウント名(XorInstagram)
            </Input>
            <motion.p className="mt-[1%] text-14 md:text-14md">
              キャンペーンの当選確認のためにSNSアカウントを確認させて頂きます。
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="bg-[#f5f5f5] h-[118px]  px-[20px] pt-[20px] rounded-[20px] border-[3px] border-border_color mt-[60px]">
          <motion.div className="overflow-y-scroll h-full">
            <motion.div className="text-[0.875rem] leading-[150%] h-full text-left">{`ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！ここに規約を入れる！`}</motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-[30px] flex justify-center">
          <motion.button
            type="submit"
            onClick={() => {
              // scroll();
              // setMode("processing");
              // setTimeout(() => {
              //   setMode("composite");
              // }, 2000);
            }}
            className="w-full"
          >
            <Label borderWidth={4} py={15} px={85}>
              画像生成
            </Label>
          </motion.button>
        </motion.div>
      </motion.div>
    </form>
  );
});
