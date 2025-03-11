import AnimationOnScroll from "./components/AnimationOnScroll";
import Carousel from "./components/Carousel/Carousel";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-[var(--primary)]" onScroll={() => scrollBy(screen)}>
      <section className="min-w-screen relative z-10 grid min-h-screen grid-cols-12 grid-rows-6 gap-1 bg-[url('/images/bgSpace1.jpg')] bg-cover bg-no-repeat px-10 pt-32 text-[0.5rem] md:grid-cols-10 md:grid-rows-10 md:px-40">
        <Hero />
      </section>
      <AnimationOnScroll
        classNameInView="in-view"
        classNameNotInView="not-in-view"
      >
        <section className="flex min-h-screen flex-col items-center justify-center gap-3 rounded-3xl p-20 text-[1rem] lg:px-52">
          <Carousel />
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        classNameInView="in-view"
        classNameNotInView="not-in-view"
      >
        <section className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[url('/images/bgSpace.jpg')] p-20 text-[1rem] lg:px-52">
          <h1 className="titleText pb-12 text-3xl">Why Work With Us?</h1>
          <p className="paragraphText">
            Aenean ex mi, tempor id volutpat vel, fermentum cursus urna. Nulla
            sodales ex a tempor cursus. Etiam nec bibendum lectus. Sed vitae
            faucibus magna, et pellentesque ipsum. Duis dignissim massa luctus
            sem convallis sodales. Proin in dignissim purus. Proin mattis sit
            amet dui a blandit. Aenean sit amet urna in justo porta hendrerit.
            Quisque vel ipsum non turpis cursus malesuada et in justo. Praesent
            dictum nunc orci, imperdiet consectetur turpis iaculis a. Mauris
            tortor libero, dignissim ultricies ligula vel, egestas dapibus
            dolor.
          </p>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        classNameInView="in-view"
        classNameNotInView="not-in-view"
      >
        <section className="flex min-h-screen flex-col items-center justify-center gap-3 rounded-3xl p-20 text-[1rem] lg:px-52">
          <h1 className="titleText pb-12 text-3xl">Custom solutions</h1>
          <p className="paragraphText">
            Aenean ex mi, tempor id volutpat vel, fermentum cursus urna. Nulla
            sodales ex a tempor cursus. Etiam nec bibendum lectus. Sed vitae
            faucibus magna, et pellentesque ipsum. Duis dignissim massa luctus
            sem convallis sodales. Proin in dignissim purus. Proin mattis sit
            amet dui a blandit. Aenean sit amet urna in justo porta hendrerit.
            Quisque vel ipsum non turpis cursus malesuada et in justo. Praesent
            dictum nunc orci, imperdiet consectetur turpis iaculis a. Mauris
            tortor libero, dignissim ultricies ligula vel, egestas dapibus
            dolor.
          </p>
        </section>
      </AnimationOnScroll>
    </main>
  );
}
