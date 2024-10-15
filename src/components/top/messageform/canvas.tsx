"use client";

import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("./composite"), { ssr: false });

export default function MainModule() {
  return <Canvas />;
}
