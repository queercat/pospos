import React from "react";
import { Card } from "./components/Card";

export const App = () => {
  return (
    <main className="flex flex-col gap-2 flex-1 bg-pos justify-center items-center">
      <p className="text-1xl font-bold">Would you like to leave a tip?</p>
      <p className="text-3xl font-bold py-2">$21.22</p>
      <p className="text-sm text-gray-500">$17.20 + $4.02 tip</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 align-middle justify-items-center">
        <Card disabled>No Tip</Card>
        <Card>90%</Card>
        <Card>50%</Card>
        <Card>70%</Card>
        <Card>Custom Tip</Card>
      </div>
    </main>
  );
};
