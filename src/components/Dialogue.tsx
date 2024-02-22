import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type DialogueProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uiBackground: React.RefObject<HTMLDivElement>;
};

export const Dialogue = ({
  isOpen,
  setIsOpen,
  children,
  uiBackground,
}: React.PropsWithChildren<DialogueProps>) => {
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });

    return () => {
      document.removeEventListener("keydown", () => {});
    };
  });

  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      if (uiBackground.current === e.target) {
        setIsOpen(false);
      }
    });
  }, [uiBackground]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed h-full w-full bg-[rgba(0,0,0,0.5)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="flex justify-center items-center h-full w-full"
            initial={{
              translateY: window.innerHeight / 2 + 100,
            }}
            animate={
              isOpen ? { translateY: 0 } : { translateY: window.innerHeight }
            }
            exit={{
              scale: 0,
              borderRadius: "50%",
              transition: { duration: 0.2 },
            }}
            ref={uiBackground}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
