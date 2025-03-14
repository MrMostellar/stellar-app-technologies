import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know what we are all about!",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 flex-[3] bg-[url('/images/bgSpace2.jpg')] bg-cover bg-no-repeat justify-center items-center min-h-screen">
        <h1 className="text-center">About Us</h1>
      </section>
    </>
  );
}
