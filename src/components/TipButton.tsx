import { motion } from "framer-motion";
import React from "react";

type CardProps = {
  disabled?: boolean;
  greed?: boolean;
  onClick?: () => void;
};

export const TipButton = ({
  children,
  disabled = false,
  greed,
  onClick,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <motion.button
      onClick={() => {
        onClick && onClick();
      }}
      className={`flex justify-center items-center ${greed ? "bg-emerald-300" : ""} ${!disabled ? "hover:bg-active bg-slate-200" : "bg-slate-500 text-white"} rounded min-h-16 min-w-48 `}
      animate={greed ? { scale: 25 } : {}}
      transition={{ duration: 60 * 10 * 10, ease: "linear" }}
    >
      {children}
    </motion.button>
  );
};
