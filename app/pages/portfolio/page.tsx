import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Take a look at some of our work.",
};

export default function page() {
  return (
    <>
      <section className="pt-32 flex-[3] bg-[url('/images/bgSpace4.jpg')] bg-cover bg-no-repeat justify-center items-center min-h-screen">
        <h1 className="text-center">Portfolio</h1>
      </section>
    </>
  );
}
