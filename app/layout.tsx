import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { url } from "inspector";

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
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="text-[var(--text)] flex flex-col min-h-[100vh] min-w-[100%] overflow-auto">
        <header className="z-10 absolute top-0 flex flex-1 flex-row min-w-[100%] py-6 px-2">
          <Header />
        </header>
        <main className="flex-[5]">{children}</main>
        <footer className="bg-[var(--primary)] flex-1 flex flex-col text-center">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
