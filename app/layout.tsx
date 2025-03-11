import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Stellar App Technologies",
  description:
    "A web development company focusing on building you a website you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9P394L0GFY"
        ></Script>
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9P394L0GFY');
  `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="overflow-y-scroll font-main text-[var(--text)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
