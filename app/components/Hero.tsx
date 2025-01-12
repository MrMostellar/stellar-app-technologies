import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex col-start-1 col-span-3 row-span-2 justify-center items-center rounded-3xl m-4 bg-blue-500">
        <p className="text-3xl">TEST TEXT IS HERE</p>
      </div>
      <div className="flex col-start-4 row-start-3 col-span-3 row-span-2 justify-center items-center rounded-3xl m-4 bg-blue-500">
        <p className="text-3xl">TEST TEXT IS HERE</p>
      </div>
      <div className="flex row-start-5 col-span-3 row-span-2 justify-center items-center rounded-3xl m-4 bg-blue-500">
        <p className="text-3xl">TEST TEXT IS HERE</p>
      </div>
    </>
  );
}
