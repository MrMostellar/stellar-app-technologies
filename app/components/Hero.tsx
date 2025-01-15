import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex col-start-2 col-span-6 row-span-3 justify-center items-center rounded-3xl m-4 bg-blue-500">
        <p className="text-3xl">Test</p>
      </div>
      <div className="flex col-start-6 row-start-5 col-span-6 row-span-3 justify-center items-center rounded-3xl m-4 bg-blue-500">
        <p className="text-3xl">Test</p>
      </div>
      <div className="flex col-start-2 row-start-9 col-span-6 row-span-3 justify-center items-center rounded-3xl m-4 bg-blue-500">
        <p className="text-3xl">Test</p>
      </div>
    </>
  );
}
