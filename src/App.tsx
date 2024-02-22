import React from "react";
import { Dialogue } from "./components/Dialogue";
import { TipButton } from "./components/TipButton";

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
  const [tipPercent, setTipPercent] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const uiBackground = React.useRef<HTMLDivElement>(null);

  const [initialPrice, setInitialPrice] = React.useState(() => {
    return Number(
      ((Math.random() * (30 - 10) + 10) * (iOS() ? 2.0 : 1.0)).toFixed(2),
    );
  });

  return (
    <>
      <main className="flex flex-col gap-2 flex-1 bg-pos justify-center items-center">
        <p className="text-2xl font-bold">Would you like to leave a tip?</p>
        <p className="text-3xl font-bold">
          ${(initialPrice + tipPercent * initialPrice).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">
          ${initialPrice.toFixed(2)} +{" "}
          <span className={tipPercent == 0 ? "text-red-500" : ""}>
            ${(tipPercent * initialPrice).toFixed(2)}
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 align-middle justify-items-center py-4">
          <TipButton
            disabled
            onClick={() => {
              setTipPercent(0);
              setIsOpen(true);
            }}
          >
            No Tip
          </TipButton>
          <TipButton
            onClick={() => {
              setTipPercent(1);
            }}
          >
            100%
          </TipButton>
          <TipButton
            onClick={() => {
              setTipPercent(Number((Math.random() * 2 + 0.99).toFixed(2)));
            }}
          >
            I'm feeling lucky
          </TipButton>
          <TipButton greed>Custom</TipButton>
        </div>
      </main>
      <Dialogue
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        uiBackground={uiBackground}
      >
        <h1>Please write, I hate service workers</h1>
      </Dialogue>
    </>
  );
};
