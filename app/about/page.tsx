import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    //100% min width removes the horizontal scroll bar from blocking the content
    <div className="flex flex-col min-h-[100vh] min-w-[100%] overflow-y-auto px-3 bg-black">
      <div className="flex-1 bg-blue-300">
        <Header />
      </div>

      <div className="flex-[3] bg-green-300">
        <h1>Body</h1>
      </div>

      <div className="flex-1 relative bg-blue-300">
        <Footer />
      </div>
    </div>
  );
}
