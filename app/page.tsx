import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100vh] min-w-[100vw] bg-black">
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
