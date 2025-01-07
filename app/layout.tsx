import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Stellar App Technologies",
  description: "A company all about apps, tech solutions, and more.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col content-stretch min-h-[100vh] min-w-[100%] overflow-auto">
        <div className="flex flex-1 flex-col min-w-[100%] min-h-[100%] bg-red-300">
          <Header />
        </div>

        <main className="flex-[5] bg-green-300">{children}</main>

        <div className="flex-1 flex flex-col text-center min-w-[100%] min-h-[100%]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
