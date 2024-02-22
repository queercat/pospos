import React from "react";

type CardProps = {
  disabled?: boolean;
};

export const Card = ({
  children,
  disabled = false,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <button
      className={`flex justify-center items-center bg-slate-200 ${!disabled ? "hover:bg-active" : ""} rounded min-h-16 min-w-32`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
