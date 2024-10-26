"use client";

import { prefix } from "@/utils";
import { motion } from "framer-motion";
import { memo } from "react";
// import { useAtomValue } from "jotai";
// import { windowSizeAtom } from "../states";

export const Footer = () => {
  return (
    <motion.footer className="rounded-t-[40px] md:rounded-t-[80px] bg-white w-full overflow-hidden px-[20px] md:px-[40px] mt-[7%]">
      <motion.div className="grid s:grid-cols-2 md:grid-cols-3 mt-[70px] gap-4 max-w-[550px] md:max-w-[700px] mx-auto">
        {[...Array(7)].map((_, i) => (
          <Banner n={i + 1} key={i} />
        ))}
      </motion.div>
      <motion.div className="mt-[60px] leading-[200%] flex flex-col md:flex-row gap-[30px] md:gap-0 w-full justify-between text-[12px] font-black">
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

const Banner = ({ n }: { n: number }) => {
  return (
    <motion.div className="">
      <motion.a>
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
