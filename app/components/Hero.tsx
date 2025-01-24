import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-transparent/15 backdrop-blur-[0.05rem] p-4 flex flex-col col-start-2 col-span-6 row-span-3 justify-center items-center rounded-3xl m-4">
        <h1 className="titleText p-4 text-lg">Pellentesque leo</h1>
        <p className="paragraphText">
          Pellentesque est ipsum, pretium eu lectus sit amet, malesuada finibus
          odio. Suspendisse placerat nunc tellus, id dapibus dui tempus ut. Duis
          sodales non ante at dictum. Cras in sem metus. Nam eleifend ante
          dictum justo sollicitudin euismod. Sed sodales elit nibh. Vivamus
          finibus volutpat rhoncus.
        </p>
      </div>
      <div className="bg-transparent/15 backdrop-blur-[0.05rem] p-4 flex flex-col col-start-6 row-start-5 col-span-6 row-span-3 justify-center items-center rounded-3xl m-4">
        <h1 className="titleText p-4 text-lg">Donec nec vestibulum</h1>
        <p className="paragraphText">
          Mauris placerat massa velit, non convallis mi sodales nec. In hac
          habitasse platea dictumst. Suspendisse sed massa egestas, porta lorem
          sit amet, molestie felis. Donec vel purus finibus, viverra velit sed,
          imperdiet nulla. Pellentesque non sem non diam scelerisque lobortis.
          Etiam pretium purus in ex imperdiet posuere.
        </p>
      </div>
      <div className="bg-transparent/15 backdrop-blur-[0.05rem] p-4 flex flex-col col-start-2 row-start-9 col-span-6 row-span-3 justify-center items-center rounded-3xl m-4">
        <h1 className="titleText p-4 text-lg">Mauris placerat</h1>
        <p className="paragraphText">
          Phasellus vel tortor ornare sem euismod bibendum vel vel lacus.
          Integer non nisi sagittis, sagittis risus condimentum, cursus lectus.
          Etiam nec ex vel risus lobortis dictum id eget lacus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Aliquam congue metus ex, sit amet rhoncus metus
          euismod nec.
        </p>
      </div>
    </>
  );
}
