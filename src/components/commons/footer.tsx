"use client";

import { prefix } from "@/utils";
import { motion } from "framer-motion";
import { memo } from "react";
// import { useAtomValue } from "jotai";
// import { windowSizeAtom } from "../states";

const bannerConfigs = [
  { href: "https://www.fukushijinzai.metro.tokyo.lg.jp/" },
  { href: "https://www.fukushijinzai.metro.tokyo.lg.jp/new-you-welfare-lp/" },
  { href: "https://www.fukushijinzai.metro.tokyo.lg.jp/fukushiwork-tokyo/" },
  {
    href: "https://www.fukushijinzai.metro.tokyo.lg.jp/sengen/aboutsengen/sengen.html",
  },
  { href: "https://tokyo-kaigochallenge.jp/" },
  { href: "https://tokyo-fukushichallenge.jp/" },
  { href: "https://www.hoikunomiryoku.metro.tokyo.lg.jp/" },
  { href: "https://www.fukushi.metro.tokyo.lg.jp/saiyou-jisou/" },
  { href: "https://www.fukushijinzai.metro.tokyo.lg.jp/hello-essential-work/" },
];

export const Footer = () => {
  return (
    <motion.footer className="rounded-t-[40px] md:rounded-t-[80px] bg-white w-full overflow-hidden px-[20px] md:px-[40px] mt-[7%]">
      <motion.div className="flex flex-col sm:flex-row items-center sm:items-start mt-[10%] sm:mt-[5%] gap-[clamp(10px,1.5vw,20px)] max-w-[1312px] w-full mx-auto">
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[550px] md:max-w-[700px] mx-auto w-[55%]">
          {bannerConfigs.map((conf, i) => (
            <Banner n={i + 1} key={i} href={conf.href} />
          ))}
        </motion.div>
        <motion.div className="aspect-[565/274] w-full sm:w-[45%] rounded-[10px] overflow-hidden mt-[5%] sm:mt-0">
          <iframe
            width="565"
            height="274"
            src="https://www.youtube.com/embed/gPZU2D9E_U8?si=0zE9rvmUhgzuZVNs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </motion.div>
      <motion.div className=" leading-[200%] mt-[60px] flex flex-col md:flex-row gap-[30px] md:gap-0 w-full justify-between text-[12px] font-black">
        <motion.p className=" whitespace-pre-wrap text-[12px] basis-1/2">{`東京都福祉局企画部企画政策課　福祉人材・サービス基盤担当(東京都福祉人材確保対策推進協議会　事務局)
電話:03-5320-4049　メール:S1140403@section.metro.tokyo.jp`}</motion.p>

        <motion.div>
          <motion.p className="md:text-right whitespace-pre-wrap">{`Copyright © Bureau of Social Welfare,
Tokyo Metropolitan Government. All Rights Reserved.`}</motion.p>

          <motion.p className="flex items-center whitespace-nowrap">
            <motion.img
              src={prefix("assets/footer/hellokitty.svg")}
              loading="lazy"
              className="mr-1"
              alt="hello kitty"
            />
            <motion.span>
              © 2024 SANRIO CO., LTD. APPROVAL NO. L654027
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="mb-[3%]">
        <FooterLogo />
      </motion.div>
    </motion.footer>
  );
};

const FooterLogo = memo(function FooterLogo() {
  // const { width } = useAtomValue(windowSizeAtom);
  // const size = useMemo(() => {
  //   const scale = Math.min(1, width / 1280);
  //   return { width: 1098 * scale, scale };
  // }, [width]);

  return (
    <motion.img
      src={prefix("assets/footer/logo.png")}
      alt=""
      width={1372}
      height={293}
      loading="lazy"
    />
  );
});

const Banner = ({ n, href }: { n: number; href: string }) => {
  return (
    <motion.div className="">
      <motion.a target="_blank" href={href} rel="noreferrer">
        <motion.img
          src={prefix(`assets/footer/banner${n}.png`)}
          loading="lazy"
          width={440}
          height={140}
          className="max-w-[220px] mx-auto w-full"
        />
      </motion.a>
    </motion.div>
  );
};
