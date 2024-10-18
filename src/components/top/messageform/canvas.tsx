"use client";

import dynamic from "next/dynamic";
import type { formMode } from ".";

const Canvas = dynamic(() => import("./composite"), { ssr: false });

export const Generator = ({
  setMode,
}: {
  setMode: (mode: formMode) => void;
}) => {
  return <Canvas setMode={setMode} />;
};
