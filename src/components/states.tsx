"use client";

import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import type { formMode, IForm } from "@/types";

export interface IGenerator {
  name: string;
  trigger: string;
  job: string;
  xaccount: string;
  email: string;
}

export const modeAtom = atom<formMode>("form");

export const uploadImageAtom = atomWithReset<string | null>(null);

export const generatorAtom = atom<IGenerator>({
  name: "",
  trigger: "",
  job: "",
  xaccount: "",
  email: "",
});

export const generateFlagAtom = atom(false);
export const generatedImageAtom = atom<string | null>(null);
export const windowSizeAtom = atom({ width: 0, height: 0, scale: 1 });
export const formDataAtom = atomWithReset<IForm>({} as IForm);
