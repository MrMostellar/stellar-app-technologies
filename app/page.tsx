import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <section className="relative pt-32 z-10 text-[0.rem] px-10 md:px-40 bg-[url('/images/bgSpace1.jpg')] bg-no-repeat bg-cover grid min-h-[101vh] min-w-[100%] grid-cols-12 grid-rows-6 md:grid-cols-10 md:grid-rows-10 gap-1">
        <Hero />
      </section>
      <section className="m-12 px-10 lg:px-40 pb-10 py-2 rounded-3xl flex flex-col items-center gap-3 text-[1rem]">
        <h1 className="titleText pb-12 text-3xl">Lorem Ipsum</h1>
        <p className="paragraphText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          volutpat magna ultrices ullamcorper luctus. Praesent elit justo,
          congue quis convallis et, mollis in ipsum. Cras commodo, massa sed
          elementum bibendum, neque erat molestie sem, eu iaculis velit magna a
          nisl. Quisque lectus eros, blandit ac felis vel, pulvinar finibus
          sapien. Mauris eget quam a leo ornare vulputate. Ut quis commodo
          massa, at rhoncus nisi. In consectetur, augue eu commodo porttitor,
          neque leo lobortis ligula, ut condimentum risus velit porta sem. Morbi
          ut velit facilisis, pretium eros a, eleifend urna. In accumsan aliquam
          interdum.
        </p>
        <p className="paragraphText">
          Aliquam sit amet molestie mi, vitae convallis nisi. Ut ut ante
          faucibus, semper orci a, vulputate lacus. Donec congue neque non nulla
          malesuada lobortis. Nunc efficitur dolor neque, id auctor est luctus
          in. Sed vel odio aliquam, euismod justo sed, interdum purus. Maecenas
          ipsum ligula, tincidunt non ultrices sed, fringilla vitae libero.
          Vestibulum magna mauris, lacinia non aliquet at, fermentum vitae quam.
          Curabitur in vulputate risus. Sed in lectus sed leo viverra sagittis.
          Suspendisse justo risus, tincidunt ac venenatis nec, dapibus ac dolor.
          Aliquam feugiat pharetra nisl, egestas tempus lorem porttitor pretium.
          Etiam augue ante, mattis at ante nec, bibendum ultricies arcu.
        </p>
        <p className="paragraphText">
          Pellentesque posuere elit in enim maximus ornare. Etiam bibendum
          semper diam ut porttitor. Suspendisse vel ante tortor. Curabitur
          luctus mattis mi vitae iaculis. Vestibulum velit nisi, molestie ac
          pharetra et, pulvinar sit amet orci. Sed rhoncus pellentesque dui, ac
          laoreet ex mollis ac. Integer vel quam eget dolor accumsan auctor.
          Nunc ut mattis elit.
        </p>
        <p className="paragraphText">
          Ut blandit lectus massa, eu ullamcorper tellus cursus ut. Pellentesque
          et ligula elit. Nulla gravida cursus auctor. Proin eu quam tortor.
          Mauris eleifend commodo interdum. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Mauris
          tincidunt nunc dolor, vel pellentesque enim eleifend pretium. Nam ac
          nunc ut odio volutpat gravida nec a ex. Cras sed rutrum leo, aliquam
          pretium sapien. Nulla facilisi. Pellentesque eu risus tempor lectus
          maximus ullamcorper. Sed at semper urna, eget dictum dolor.
          Suspendisse potenti. Maecenas in egestas metus. Cras ullamcorper porta
          justo, dictum aliquet mi blandit id. In pellentesque mollis ante,
          lobortis accumsan lacus.
        </p>
        <p className="paragraphText">
          Aenean ex mi, tempor id volutpat vel, fermentum cursus urna. Nulla
          sodales ex a tempor cursus. Etiam nec bibendum lectus. Sed vitae
          faucibus magna, et pellentesque ipsum. Duis dignissim massa luctus sem
          convallis sodales. Proin in dignissim purus. Proin mattis sit amet dui
          a blandit. Aenean sit amet urna in justo porta hendrerit. Quisque vel
          ipsum non turpis cursus malesuada et in justo. Praesent dictum nunc
          orci, imperdiet consectetur turpis iaculis a. Mauris tortor libero,
          dignissim ultricies ligula vel, egestas dapibus dolor.
        </p>
        <p className="paragraphText">
          Donec eget eros at turpis imperdiet ornare. Sed malesuada ut quam nec
          efficitur. Aenean sollicitudin, tortor ac aliquet condimentum, odio
          sem facilisis lorem, vel lacinia lacus ligula id nulla. Vivamus nulla
          enim, pharetra a ante vitae, imperdiet molestie ipsum. Vestibulum a
          dolor hendrerit, pulvinar tortor a, dictum ligula. Phasellus venenatis
          rutrum tempor. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Morbi nec porttitor purus.
          Praesent purus neque, mollis eu semper in, feugiat a dui. Duis
          vestibulum ultricies nulla. Etiam id risus eu nunc ultrices tempor.
          Sed non efficitur ex, nec egestas tellus. Proin ex ipsum, congue sed
          vestibulum eu, volutpat ac dui. Donec metus tellus, tincidunt at justo
          in, suscipit lobortis erat.
        </p>
      </section>
    </>
  );
}
