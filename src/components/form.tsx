"use client";

import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadImageAtom } from "./states";

export const Form = () => {
  const setImage = useSetAtom(uploadImageAtom);

  const onDrop = useCallback((file: File[]) => {
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      const r = reader.result;
      console.log(typeof r);
      setImage(r as string);
    };
    reader.readAsDataURL(file[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <section className="w-[300px] h-[300px] bg-gray-400" {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && <div>drag</div>}
      </section>
    </>
  );
};
