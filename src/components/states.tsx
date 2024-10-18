"use client";

import { atom } from "jotai";

export interface IGenerator {
  name: string;
  trigger: string;
  job: string;
  xaccount: string;
  email: string;
}

export const uploadImageAtom = atom<string | null>(null);

export const generatorAtom = atom<IGenerator>({
  name: "",
  trigger: "",
  job: "",
  xaccount: "",
  email: "",
});

export const genJobAtom = atom("");
export const genNameAtom = atom("");
export const genTriggerAtom = atom("");
export const generatedImageAtom = atom<string | null>(null);
