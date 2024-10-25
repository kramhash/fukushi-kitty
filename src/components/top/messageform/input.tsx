"use client";

import { ReactNode, ChangeEventHandler } from "react";
import { motion } from "framer-motion";
import { InputTitle } from "./input-title";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import type { FieldError } from "react-hook-form";

export const Input = ({
  n,
  children,
  maxLength,
  className,
  name,
  onChange,
  hasNumber = true,
  labelJustify,
  errors,
  register,
  placeholder,
  defaultValue,
}: {
  n: number;
  children?: ReactNode;
  maxLength?: number;
  className?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  hasNumber?: boolean;
  labelJustify?: string;
  register?: UseFormRegisterReturn;
  errors: FieldError | undefined;
  placeholder?: string;
  defaultValue?: string;
}) => {
  return (
    <motion.div className={`flex items-start flex-col ${className ?? ""}`}>
      <InputTitle n={n} hasNumber={hasNumber} justifyContent={labelJustify}>
        {children}
      </InputTitle>
      <input
        className="px-[10px] py-[5px] border-[rgba(0,0,0,0.5)] border-[3px] rounded-[10px] bg-[#f5f5f5] w-full mt-[15px] text-[16px] font-mplus1c"
        maxLength={maxLength}
        // name={name}
        // onChange={onChange}
        {...register}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors && (
        <motion.p className="text-red-500 text-[14px] mt-[5px]">
          {errors.message}
        </motion.p>
      )}
    </motion.div>
  );
};
