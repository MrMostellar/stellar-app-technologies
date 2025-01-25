import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-transparent/15 backdrop-blur-[0.05rem] p-1 sm:p-4 flex flex-col col-start-1 col-span-12 row-start-1 row-span-2 md:col-start-2 md:col-span-6 md:row-span-3 justify-center items-center rounded-3xl m-1 sm:m-4">
        <h1 className="titleText p-4 text-lg">Pellentesque leo</h1>
        <p className="paragraphText">
          Pellentesque est ipsum, pretium eu lectus sit amet, malesuada finibus
          odio. Suspendisse placerat nunc tellus, id dapibus dui tempus ut.
        </p>
      </div>
      <div className="bg-transparent/15 backdrop-blur-[0.05rem] p-1 sm:p-4 flex flex-col col-start-1 col-span-12 row-start-3 row-span-2 md:col-start-6 md:row-start-4 md:col-span-6 md:row-span-3 justify-center items-center rounded-3xl m-1 sm:m-4">
        <h1 className="titleText p-4 text-lg">Donec nec vestibulum</h1>
        <p className="paragraphText">
          Mauris placerat massa velit, non convallis mi sodales nec. In hac
          habitasse platea dictumst. Suspendisse sed massa egestas, porta lorem
          sit amet, molestie felis.
        </p>
      </div>
      <div className="bg-transparent/15 backdrop-blur-[0.05rem] p-1 sm:p-4 flex flex-col col-start-1 col-span-12 row-start-5 row-span-2 md:col-start-2 md:row-start-9 md:col-span-6 md:row-span-3 justify-center items-center rounded-3xl m-1 sm:m-4">
        <h1 className="titleText p-4 text-lg">Mauris placerat</h1>
        <p className="paragraphText">
          Phasellus vel tortor ornare sem euismod bibendum vel vel lacus.
          Integer non nisi sagittis, sagittis risus condimentum, cursus lectus.
        </p>
      </div>
    </>
  );
}
