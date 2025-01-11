import React from "react";

export default function Hero() {
  return (
    <>
      <section className="flex col-span-3 row-span-2 justify-center items-center bg-blue-500">
        <p className="text-3xl">TEST TEXT IS HERE</p>
      </section>
      <section className="flex col-start-4 row-start-3 col-span-3 row-span-2 justify-center items-center bg-blue-500">
        <p className="text-3xl">TEST TEXT IS HERE</p>
      </section>
      <section className="flex row-start-5 col-span-3 row-span-2 justify-center items-center bg-blue-500">
        <p className="text-3xl">TEST TEXT IS HERE</p>
      </section>
    </>
  );
}
