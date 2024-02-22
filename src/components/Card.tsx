import React from "react";

type CardProps = {
  disabled?: boolean;
};

export const Card = ({
  children,
  disabled = false,
}: React.PropsWithChildren<CardProps>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <button
      className={`flex justify-center items-center ${!disabled ? "hover:bg-active bg-slate-200" : "bg-slate-500 text-white"} rounded min-h-16 min-w-32`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
