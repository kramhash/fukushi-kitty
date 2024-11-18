"use client";

import { motion } from "framer-motion";

export const BackArrow = ({ rotation }: { rotation?: number }) => {
  return (
    <motion.svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pb-[11%]"
      style={{ rotate: rotation }}
    >
      <path
        d="M11 2L2 8L11 14"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export const NextArrow = () => {
  return <BackArrow rotation={180} />;
};

export const Empty = () => {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pb-[11%]"
    ></svg>
  );
};

export const BlankIcon = ({
  fill = "white",
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block w-[14px] ${className ?? ""}`}
    >
      <path
        d="M15.5055 11.51V14.13C15.5055 14.97 14.8255 15.65 13.9855 15.65H2.37547C1.53547 15.65 0.855469 14.97 0.855469 14.13V2.52C0.855469 1.68 1.53547 1 2.37547 1H5.12547C5.53547 1 5.87547 1.34 5.87547 1.75V2.75C5.87547 3.16 5.53547 3.5 5.12547 3.5H3.37547L3.35547 13.13L12.9855 13.15L13.0055 11.51C13.0055 11.1 13.3455 10.76 13.7555 10.76H14.7555C15.1655 10.76 15.5055 11.1 15.5055 11.51ZM14.9855 0H8.12547C7.71547 0 7.37547 0.34 7.37547 0.75V1.75C7.37547 2.16 7.71547 2.5 8.12547 2.5L12.2055 2.53L6.01547 8.72C5.72547 9.01 5.72547 9.49 6.01547 9.78L6.72547 10.49C6.87547 10.64 7.06547 10.71 7.25547 10.71C7.44547 10.71 7.63547 10.64 7.78547 10.49L14.0055 4.31V8.51C14.0055 8.92 14.3455 9.26 14.7555 9.26H15.7555C16.1655 9.26 16.5055 8.92 16.5055 8.51V1.52C16.5055 0.68 15.8255 0 14.9855 0Z"
        fill={fill}
      />
    </svg>
  );
};

export const MiniArrow = ({ fill = "black" }: { fill?: string }) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3.76795C10.3333 4.53775 10.3333 6.46225 9 7.23205L3 10.6962C1.66666 11.466 -5.6841e-07 10.5037 -5.01112e-07 8.9641L-1.9827e-07 2.0359C-1.30972e-07 0.496296 1.66667 -0.465953 3 0.303847L9 3.76795Z"
        fill={fill}
      />
    </svg>
  );
};
