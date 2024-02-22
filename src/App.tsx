import React from "react";
import { Card } from "./components/Card";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export const App = () => {
  const [tip, setTip] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const uiBackground = React.useRef<HTMLDivElement>(null);

  let upcharge = 1.0;

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
    if (uiBackground.current === null) return;

    uiBackground.current.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target !== uiBackground.current) return;
      setIsOpen(false);
    });
  }, [uiBackground]);

  const [initialPrice, setInitialPrice] = React.useState(() => {
    return Math.floor(Math.random() * (30 - 10) + 10) * upcharge;
  });

  if (iOS()) {
    upcharge = 2.0;
  }

  return (
    <>
      <main className="flex flex-col gap-2 flex-1 bg-pos justify-center items-center">
        <p className="text-2xl font-bold">Would you like to leave a tip?</p>
        <p className="text-3xl font-bold">${initialPrice}</p>
        <p className="text-sm text-gray-500">${initialPrice} + $4.02 tip</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 align-middle justify-items-center py-4">
          <Card disabled>No Tip</Card>
          <Card>90%</Card>
          <Card>50%</Card>
          <Card>70%</Card>
          <Card>Custom Tip</Card>
        </div>
        <button
          className="bg-active text-white rounded p-2"
          onClick={() => setIsOpen(true)}
        >
          Open Dialog
        </button>
      </main>

      <motion.div
        className="fixed h-full w-full bg-black"
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={
          isOpen
            ? { opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }
            : { opacity: 1, backgroundColor: "rgba(0, 0, 0, 0)" }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        hidden={!isOpen}
      >
        <motion.div
          ref={uiBackground}
          className="flex justify-center items-center h-full w-full"
          initial={{
            translateY: window.innerHeight,
          }}
          animate={
            isOpen ? { translateY: 0 } : { translateY: window.innerHeight }
          }
        >
          <div className="bg-white p-16 rounded-lg"></div>
        </motion.div>
      </motion.div>
    </>
  );
};
