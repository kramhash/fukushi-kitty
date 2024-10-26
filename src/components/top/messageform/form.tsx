"use client";

import { useAtom } from "jotai";
import { memo, useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useInView } from "framer-motion";
import { formDataAtom } from "@/components/states";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonLabel, Label, SVGTitle } from "@/components/commons";
import { Generator } from "./canvas";
import { GeneratedImage, ImageTarget, Input, Loading } from "./";
import { modeAtom } from "@/components/states";
import type { formMode, IForm } from "@/types";
import { useScrollTo } from "@/hooks";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const schema = yup.object().shape({
  name: yup.string().required("名前を入力してください"),
  job: yup.string().required("職種を入力してください"),
  trigger: yup.string().max(22).required("働くきっかけを入力してください"),
  email: yup
    .string()
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスを入力してください"),
  xaccount: yup.string().required("SNSアカウント名を入力してください"),
  googleReCaptchaToken: yup.string(),
});

export const Form = () => {
  const [mode, setMode] = useAtom(modeAtom);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      console.log("in view");
      try {
        animate(".grecaptcha-badge", { opacity: 1 });
      } catch (_) {}
    } else {
      try {
        animate(".grecaptcha-badge", { opacity: 0 });
      } catch (_) {}
    }
  }, [isInView]);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY ?? ""}
      language="ja"
    >
      <motion.section
        className="max-w-[964px] flex flex-col mx-auto w-[calc(100% - 20px)] mt-[125px] mb-[30px] has-anchor"
        id="generator-form"
        ref={ref}
      >
        <SVGTitle src="assets/top/messageform/generator.svg" width={558} />
        <motion.section
          className="rounded-[30px] md:rounded-[50px] bg-white w-full text-black px-[5%] py-[40px] min-h-[500px] relative overflow-hidden border-[5px] border-black mt-[20px]"
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
            {mode == "processing" && <Loading key={"loading"} />}
          </AnimatePresence>

          <Generator key={`generator-composite`} />
        </motion.section>
      </motion.section>
    </GoogleReCaptchaProvider>
  );
};

const GeneratorForm = memo(function GeneratorForm({
  setMode,
}: {
  setMode: (mode: formMode) => void;
}) {
  const [agree, setAgree] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setForm] = useAtom(formDataAtom);
  const scroll = useScrollTo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IForm, "googleReCaptchaToken">>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("on submit", data);
    if (!executeRecaptcha) return;
    const token = await executeRecaptcha("submit");
    // console.log("token", token);

    setForm({ ...data, googleReCaptchaToken: token });
    scroll("generator-form");
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
              register={register("name")}
              maxLength={25}
              errors={errors.name}
              placeholder={"名前"}
              defaultValue={formData.name}
            >
              名前(ニックネーム可)を記入して下さい
            </Input>
            <Input
              n={2}
              maxLength={25}
              name="job"
              errors={errors.job}
              placeholder={"職種"}
              register={register("job")}
              defaultValue={formData.job}
            >
              職種を記入して下さい
            </Input>
            <Input
              n={3}
              name="trigger"
              maxLength={22}
              register={register("trigger")}
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
              maxLength={50}
              className=" w-full"
              hasNumber={false}
              labelJustify="center"
              register={register("email")}
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
              register={register("xaccount")}
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

        <motion.div
          className="flex justify-center items-center mt-[5%] gap-[2%] whitespace-nowrap cursor-pointer select-none"
          onClick={() => {
            setAgree(!agree);

            return false;
          }}
        >
          <motion.div className="rounded-[5px] md:rounded-[10px] border-[3px] w-[clamp(20px,5vw,40px)] h-[clamp(20px,5vw,40px)] border-black aspect-square flex items-center justify-center p-[0.5%]">
            {agree && (
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M3 9L12.4286 19L25 3"
                  stroke="#E60020"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </motion.div>
          <motion.div className="font-mplus1c">規約に同意する</motion.div>
        </motion.div>

        <motion.div className="mt-[30px] flex justify-center">
          <ButtonLabel
            type="submit"
            disabled={!agree}
            className={`${agree ? "" : "opacity-30"}`}
          >
            画像生成
          </ButtonLabel>
          {/* <motion.button
            type="submit"
            onClick={() => {
              // scroll();
              // setMode("processing");
              // setTimeout(() => {
              //   setMode("composite");
              // }, 2000);
            }}
            disabled={!agree}
            className={`w-full ${agree ? "" : "opacity-30"}`}
          >
            <Label borderWidth={4} py={15} px={85}>
              画像生成
            </Label>
          </motion.button> */}
        </motion.div>
      </motion.div>
    </form>
  );
});
