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
      <body className="flex flex-col min-h-[100vh] min-w-[100%] overflow-auto">
        <div className="flex flex-1 flex-row min-w-[100%] min-h-[100%]">
          <Header />
        </div>

        <main className="flex-[5] bg-green-300">{children}</main>

        <div className="flex-1 flex flex-col text-center min-w-[100%] min-h-[100%]">
          <Footer />
        </div>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      </body>
    </html>
  );
}
