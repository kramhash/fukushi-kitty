"use client";

import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("./composite"), { ssr: false });

export const Generator = ({}) => {
  return <Canvas />;
};
