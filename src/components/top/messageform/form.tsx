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
  name: yup
    .string()
    .required("名前を入力してください")
    .max(25, "25文字以内で入力してください"),
  job: yup
    .string()
    .required("職種を入力してください")
    .max(15, "15文字以内で入力してください"),
  trigger: yup
    .string()
    .required("働くきっかけを入力してください")
    .max(22, "22文字以内で入力してください"),
  email: yup
    .string()
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスを入力してください"),
  xaccount: yup
    .string()
    .required("SNSアカウント名を入力してください")
    .matches(/^[0-9a-zA-Z_]+$/, "入力できるのは半角英数字のみです"),
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
    // console.log("on submit", data);
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
              placeholder={"名前（25文字以内）"}
              defaultValue={formData.name}
            >
              名前(ニックネーム可)を記入して下さい
            </Input>
            <Input
              n={2}
              maxLength={15}
              name="job"
              errors={errors.job}
              placeholder={"職種（15文字以内）"}
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
              placeholder={"働くきっかけ（22文字以内）"}
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
              maxLength={15}
              className="w-full"
              hasNumber={false}
              labelJustify="center"
              errors={errors.xaccount}
              register={register("xaccount")}
              defaultValue={formData.xaccount}
            >
              SNSアカウント名(XorInstagram)
            </Input>
            <motion.p className="mt-[1%] text-14 md:text-14md">
              キャンペーンの当選確認のためにSNSアカウントを確認させて頂きます。
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="bg-[#f5f5f5] h-[130px]  px-[min(20px,2%)] pt-[min(20px,3%)] rounded-[20px] border-[3px] border-border_color mt-[60px]">
          <motion.div className="overflow-y-scroll h-full">
            <motion.div className="text-10xs md:text-14lg leading-[150%] h-full whitespace-pre-wrap text-center">
              {term}
            </motion.div>
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
            width={"min(350px, 100%)"}
            fontSize={"var(--font-20-static)"}
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

const term = `+++++++++++++++++++++++++++++++++++++++++++

【**注意事項**】

・『#なにゆえ私が福祉職』ジェネレーター投稿キャンペーン（以下、「本キャンペーン」といいます。）は、東京都（以下、「都」といいます。）が主催するものです。プレゼントへの応募には、X（旧Twitter）又はInstagramにて、ハッシュタグ「#なにゆえ私が福祉職」を付け、本サイトのジェネレーターにて生成した画像を添付した上で投稿いただく必要があります。

・本キャンペーンは、X（旧Twitter）又はInstagramのいずれかよりご応募いただけます。

・応募に当たり、Instagramフィードへの投稿は対象となりますが、Instagramストーリーズへの投稿は対象となりません。

・お一人の方が何回でもご応募（投稿）いただけますが、当選は、１アカウントにつき一回とさせていただきます。

・SNSアカウントを非公開設定にされている場合及び指定のハッシュタグ「#なにゆえ私が福祉職」がない場合は、抽選対象外とさせていただきます。

・投稿作品は、投稿者ご自身が制作したもの（本サイトのジェネレーターを用いて生成した画像を含む。）に限ります。

・本キャンペーンの内容、期間、賞品等は、諸般の事情により予告なく中止または変更される場合があります。本キャンペーンの中止、または変更により生じるいかなる損害についても、都が責任を負うものではありません。

・投稿で使用する写真に、投稿者ご自身以外が写っている場合は承諾を受けた上で使用してください。

・投稿された作品の著作権（著作権法第27条および第28条に定める権利を含みます。）は、投稿者に帰属しますが、当該投稿者は、都に対し、当該作品を使用（広報活動における利用を含む）、収益又は処分するのに必要な範囲で当該著作権を実施する非独占的権利を無償で許諾するものとし、かつ、著作者人格権を行使しないことに同意するものとします。

・運営上、投稿内容が適切でないと都が判断した場合には、削除要請、または不適切な行為としてX（旧Twitter）社、Meta社に報告させていただくことがあります。

・本キャンペーンのために投稿された内容は、都が運営するサイト、公式SNSまたは告知媒体（雑誌・新聞・TV・WEBサイト）への掲載等、プロモーションのために使用する場合があります。あらかじめご了承ください。使用方法やデザインに関しては、都に一任するものとさせていただきます。なお、使用に関するお問い合わせにはお答えいたしかねます。

・当選者にはジェネレーターによる画像作成時にご登録いただいたメールアドレスへ、当選のご連絡をさせていただきます。

・当選者ご本人と連絡がつかない場合、都の指定する方法により賞品受領の意思が確認できない場合、指定された期日までに必要な情報を登録していただけない場合等には、当選をご辞退されたものとみなします。

・都の判断で応募に関して不正があったと認められた場合には、当選を無効とさせていただきます。

・賞品の発送先は日本国内に限らせていただきます。

・当選の権利はご当選者ご本人限りのものとし、換金、他人への譲渡、インターネットオークション等への出品行為は禁止いたします。また、他の賞品への変更等のご依頼もお受けいたしかねます。

・応募数、当選情報等、本キャンペーンの結果に関するお問い合わせにはお答えいたしかねます。あらかじめご了承ください。

・いかなる場合であっても報酬その他名称の如何を問わず、投稿および権利譲渡の対価は一切発生いたしません。

【禁止事項】

本キャンペーンに関する投稿または行為につき、禁止事項は以下のとおりです。

・東京都または第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利もしくは利益を侵害するもの、または侵害するおそれのあるもの、誹謗中傷、営業妨害、イメージを著しく混乱させるようなもの、第三者に損害が生じるおそれのあるもの、わいせつ、児童ポルノおよび児童の性的搾取を助長する投稿

・公序良俗に反する、またはそのおそれのある投稿

・投稿された作品を使用した、本キャンペーンと関係のない特定の政治団体、企業、個人、宗教、思想等の宣伝告知、または商業目的での販売行為

・本規約、XやInstagramの規約に違反する行為

・その他本キャンペーンの趣旨や法令に違反する行為など、東京都が不適切と判断する行為

【**本キャペーンにおける個人情報取り扱いについて**】

・お預かりした個人情報の管理については、都が責任をもって対応するものとし、個人情報の保護に関する法律並びにこれに関連する法令及びガイドライン等を遵守し、漏えい、不正流用、改ざん等の防止に適切な対策を講じます。また、都の業務委託先おいても同様に適切な対策を講じます。

・お預かりした個人情報は、法令に基づく場合を除き、本キャンペーンに関するご案内、ご本人様確認、賞品発送の目的以外に利用することはありません。キャンペーン終了後に適切な方法により消去し、又は情報が記録された媒体を安全な方法で廃棄します。

・都は、法令に基づく場合を除き、ご本人の同意を得ることなく、業務委託先以外の第三者に個人情報を提供しません。

【**免責事項**】

・都は、理由の如何を問わず（故意または重過失による場合を除きます）、応募又は投稿内容の都による利用に当たって投稿者及び第三者に生じたトラブル・損害（直接、間接の損害別を問わず）について一切責任を負わないものとします。

・X（旧Twitter）のご利用に当たっては、Xサービス利用規約をご確認ください。

・Instagramのご利用に当たっては、Instagram利用規約をご確認ください。

・都とX（旧Twitter）、X社、Instagram、Meta社との間に、本キャンペーン実施に関して提携関係、代理関係、雇用関係、合弁関係その他の契約関係はありません。

・都又は都の業務委託先は、本キャンペーンの内容を、予告なく変更する場合があります。

・X（旧Twitter）は米国及びその他の国における X Corp.の商標または登録商標です。Instagramは米国及びその他の国におけるMeta Platforms, Inc.の商標または登録商標です。

以上

+++++++++++++++++++++++++++++++++++++++++++
`;
