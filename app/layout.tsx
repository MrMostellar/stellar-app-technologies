import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Stellar App Technologies",
  description: "A company all about apps, tech solutions, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-main text-[var(--text)] flex flex-col min-h-[100vh] overflow-y-auto">
        <header className="z-10 absolute top-2 flex flex-1 flex-row w-[100%] py-6 px-2">
          <Header />
        </header>
        <main className="flex-[5] bg-[var(--primary)] pt-32">{children}</main>
        <footer className="bg-[var(--secondary)] flex-1 flex flex-col text-center">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
