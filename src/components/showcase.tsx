import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

export const Showcase = () => {
  return (
    <div className=" min-h-screen w-full bg-pink-100 flex flex-col items-center py-10 gap-5">
      <h2 className="text-xl font-medium">Ready Made Components</h2>
      <ConnectButton />
    </div>
  );
};
