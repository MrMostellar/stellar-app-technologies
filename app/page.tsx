import Hero from "./components/Hero";
import { siteTheme } from "./data/SiteTheme";

export default function Home() {
  return (
    <>
      <section
        className={`grid min-h-[100vh] grid-cols-6 grid-rows-6 gap-1 mt-32 ${siteTheme.heroBG}`}
      >
        <Hero />
      </section>
    </>
  );
}
