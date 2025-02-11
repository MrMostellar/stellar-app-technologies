import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Let's keep in touch!",
};

export default function ContactPage() {
  return (
    <>
      <metadata>
        <title>Contact Us</title>
      </metadata>
      <section className="pt-32 flex-[3] bg-[url('/images/bgSpace3.jpg')] bg-cover bg-no-repeat justify-center items-center min-h-screen">
        <h1 className="text-center">Contact Us</h1>
      </section>
    </>
  );
}
