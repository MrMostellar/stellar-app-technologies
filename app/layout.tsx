import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { siteTheme } from "./data/SiteTheme";

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
      <body className="flex flex-col min-h-[100vh] min-w-[100%] overflow-auto">
        <header
          className={`flex flex-1 flex-row fixed min-w-[100%] py-6 bg-transparent backdrop-blur-lg`}
        >
          <Header />
        </header>
        <main className={`flex-[5] ${siteTheme.bodyTheme}`}>{children}</main>
        <footer
          className={`flex-1 flex flex-col text-center ${siteTheme.footerTheme}`}
        >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
