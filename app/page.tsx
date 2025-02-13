import AnimationOnScroll from "./components/AnimationOnScroll";
import CarouselGenerator from "./components/Carousel/CarouselGenerator";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <section className="relative pt-32 z-10 text-[0.5rem] px-10 md:px-40 bg-[url('/images/bgSpace1.jpg')] bg-no-repeat bg-cover grid min-h-screen min-w-screen grid-cols-12 grid-rows-6 md:grid-cols-10 md:grid-rows-10 gap-1">
        <Hero />
      </section>
      <AnimationOnScroll
        classNameInView="in-view"
        classNameNotInView="not-in-view"
      >
        <section className="min-h-screen p-20 lg:px-52 rounded-3xl flex flex-col items-center justify-center gap-3 text-[1rem]">
          <div className="rounded-3xl bg-[var(--secondary)] min-h-[50vh] min-w-[80vw] items-center justify-evenly flex flex-1">
            <CarouselGenerator />
          </div>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        classNameInView="in-view"
        classNameNotInView="not-in-view"
      >
        <section className="min-h-screen p-20 bg-[url('/images/bgSpace.jpg')] lg:px-52 flex flex-col items-center justify-center gap-3 text-[1rem]">
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
          <p className="paragraphText">
            Donec eget eros at turpis imperdiet ornare. Sed malesuada ut quam
            nec efficitur. Aenean sollicitudin, tortor ac aliquet condimentum,
            odio sem facilisis lorem, vel lacinia lacus ligula id nulla. Vivamus
            nulla enim, pharetra a ante vitae, imperdiet molestie ipsum.
            Vestibulum a dolor hendrerit, pulvinar tortor a, dictum ligula.
            Phasellus venenatis rutrum tempor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Morbi
            nec porttitor purus. Praesent purus neque, mollis eu semper in,
            feugiat a dui. Duis vestibulum ultricies nulla. Etiam id risus eu
            nunc ultrices tempor. Sed non efficitur ex, nec egestas tellus.
            Proin ex ipsum, congue sed vestibulum eu, volutpat ac dui. Donec
            metus tellus, tincidunt at justo in, suscipit lobortis erat.
          </p>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        classNameInView="in-view"
        classNameNotInView="not-in-view"
      >
        <section className="min-h-screen p-20 lg:px-52 rounded-3xl flex flex-col items-center justify-center gap-3 text-[1rem]">
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
          <p className="paragraphText">
            Donec eget eros at turpis imperdiet ornare. Sed malesuada ut quam
            nec efficitur. Aenean sollicitudin, tortor ac aliquet condimentum,
            odio sem facilisis lorem, vel lacinia lacus ligula id nulla. Vivamus
            nulla enim, pharetra a ante vitae, imperdiet molestie ipsum.
            Vestibulum a dolor hendrerit, pulvinar tortor a, dictum ligula.
            Phasellus venenatis rutrum tempor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Morbi
            nec porttitor purus. Praesent purus neque, mollis eu semper in,
            feugiat a dui. Duis vestibulum ultricies nulla. Etiam id risus eu
            nunc ultrices tempor. Sed non efficitur ex, nec egestas tellus.
            Proin ex ipsum, congue sed vestibulum eu, volutpat ac dui. Donec
            metus tellus, tincidunt at justo in, suscipit lobortis erat.
          </p>
        </section>
      </AnimationOnScroll>
    </>
  );
}
